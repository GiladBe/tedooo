import * as React from 'react';
import NavBar from './NavBar';
import { getNextFeed, sendImpression } from '../../../services.tsx/feedService';
import { feedInterface } from '../../../types/types';
import FeedItem from './FeedItem';
import Spinner from '../../common/genericSpinner';
import { throttle } from 'lodash';
import styles from './FeedPage.module.scss'; // Import your SCSS module

const FeedPage = () => {
    const [hasMore, setHasMore] = React.useState<boolean>(true);
    const [feedMap, setFeedMap] = React.useState<{ [key: string]: feedInterface }>({});
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [seenItems, setSeenItems] = React.useState<Set<string>>(new Set());

    const loadFeed = async (numberToSkip: number) => {
        setIsLoading(true);
        console.log('GETTING MORE, starting from:', numberToSkip);
        const newFeed = await getNextFeed(numberToSkip);
        setHasMore(newFeed.hasMore);
        if (newFeed.data.length) {
            setFeedMap((prevFeedArr) => ({
                ...prevFeedArr,
                ...newFeed.data.reduce((acc: any, item: feedInterface) => {
                    acc[item.id] = item;
                    return acc;
                }, {} as { [key: string]: feedInterface }),
            }));
        }
        setIsLoading(false);
    };

    React.useEffect(() => {
        loadFeed(0);
    }, []);

    const handleScroll = throttle(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        let impressionsSent = false;

        Object.values(feedMap).forEach(feed => {
            const element = document.getElementById(feed.id);
            if (element) {
                const { top, bottom } = element.getBoundingClientRect();
                const isVisible = top < windowHeight && bottom > 0;

                if (isVisible && !seenItems.has(feed.id)) {
                    sendImpression(feed.id); 
                    seenItems.add(feed.id); 
                    impressionsSent = true; 
                }
            }
        });
        if (impressionsSent) {
            setSeenItems(new Set(seenItems)); 
        }
        if (hasMore && scrollTop + windowHeight >= document.documentElement.scrollHeight - 10) {
            loadFeed(Object.keys(feedMap).length);
        }
    }, 200);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log(Object.keys(feedMap).length);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMore, feedMap]);

    return (
        <div className={styles.feedPage}>
            <NavBar  />
            <div className={styles.feedContainer}>
                {Object.keys(feedMap).length > 0 &&
                    Object.values(feedMap).map((feed: feedInterface) => (
                        <div
                            id={feed.id}
                            key={feed.id}
                            className={styles.feedItem}
                        >
                            <FeedItem item={feed} setFeedMap={setFeedMap} />
                        </div>
                    ))}
                {isLoading && <Spinner />}
            </div>
        </div>
    );
};

export default FeedPage;
