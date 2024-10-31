// import * as React from 'react';

// import { feedInterface } from '../../../types/types';
// import like from '../../../Assets/Images/like.png';
// import gapIcon from '../../../Assets/Icons/Vector 2.svg'
// import  CustomIcon  from '../../../Assets/Icons/icons';

// interface ComponentProps {
//     item: feedInterface;
//     setFeedMap: React.Dispatch<React.SetStateAction<{ [key: string]: feedInterface }>>
// }


// const translateTime = (dateString: string) => {
//     const now = new Date();
//     const date = new Date(dateString);
//     const diffInMs = now.getTime() - date.getTime();

//     const seconds = Math.floor(diffInMs / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
//     const months = Math.floor(days / 30);
//     const years = Math.floor(months / 12);

//     if (years > 0) {
//         return `${years} year${years > 1 ? 's' : ''} ago`;
//     } else if (months > 0) {
//         return `${months} month${months > 1 ? 's' : ''} ago`;
//     } else if (days > 0) {
//         return `${days} day${days > 1 ? 's' : ''} ago`;
//     } else if (hours > 0) {
//         return `${hours} hour${hours > 1 ? 's' : ''} ago`;
//     } else if (minutes > 0) {
//         return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
//     } else {
//         return 'Just now';
//     }

// }


// const FeedItem = (props: ComponentProps) => {

//     const { item ,setFeedMap} = props
//     const [isExpanded, setIsExpanded] = React.useState(false);

//     const toggleExpand = () => {
//         setIsExpanded(prev => !prev); // Toggle the expansion state
//     };
//     const handleLike = (id: string) => {
//         setFeedMap((prevFeedArr) => ({
//             ...prevFeedArr,
//             [id]: {
//                 ...prevFeedArr[id],
//                 didLike: !prevFeedArr[id]?.didLike,
//                 likes: prevFeedArr[id]?.didLike ? prevFeedArr[id].likes - 1 : prevFeedArr[id].likes + 1,
//             },
//         }));
//     };


//     const createHeader = () => {
//         const time = translateTime(item.date)



//         return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', minHeight: '138px', padding: '0 20px' }}>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <div style={{
//                     width: '40px',
//                     height: '40px',
//                     overflow: 'hidden',
//                     borderRadius: '50%',
//                     marginRight: '12px'
//                 }}>
//                     <img src={item.avatar} style={{ width: '100%', height: '100%' }} />
//                 </div>

//                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40px' }}>
//                     <p style={{ color: '#282F2D', fontSize: '16px', margin: 0 }}> {item.username} </p>
//                     <div style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>
//                         <span style={{ color: '#0e73d3' }}> {item.shopName}</span>
//                         <span style={{ color: '#737877' }}> · {time}</span>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 style={{
//                     maxHeight: isExpanded ? 'none' : '4em',
//                     overflow: 'hidden',
//                     display: '-webkit-box',
//                     WebkitBoxOrient: 'vertical',
//                     WebkitLineClamp: isExpanded ? 'none' : '2',
//                     cursor: 'pointer',
//                     textOverflow: 'ellipsis',
//                     whiteSpace: 'normal',
//                 }}
//                 onClick={toggleExpand}
//             >
//                 {item.text}
//             </div>
//         </div>

//     }

//     const createImages = () => {

//         const isOneImage: boolean = item.images.length === 1
//         if (!isOneImage) {
//             item.images = item.images.slice(0, 2)
//         }

//         return (

//             <div
//                 style={{
//                     width: '1120px',
//                     height: '517px',
//                     backgroundColor: '#B8C248',
//                     display: 'flex',
//                     justifyContent: isOneImage ? 'center' : 'space-between',
//                     alignItems: 'center'
//                 }}
//             >
//                 {item.images.map((image, index) => (
//                     <div
//                         key={index}
//                         style={{
//                             width: isOneImage ? '881px' : '555px',
//                             height: '517px',
//                             overflow: 'hidden'
//                         }}
//                     >
//                         <img
//                             src={image}
//                             style={{
//                                 width: '100%',
//                                 height: '100%',
//                                 minWidth: '555px',
//                                 minHeight: '517px',
//                                 objectFit: 'cover',
//                             }}
//                             alt={`Image ${index + 1}`}
//                         />
//                     </div>
//                 ))}
//             </div>
//         )

//     }

//     const createFooter = () => {
//         return (
//             <div style={{ color: '#737877', fontWeight: 400, fontSize: "14px" }}>
//                 < div
//                     style={{ display: 'flex', justifyContent: 'space-between', height: '48px', alignItems: 'center' }}>

//                     <div style={{ display: 'flex', padding: '0 20px', fontSize: '14px', alignItems: 'center' }}>

//                         <img src={like} width="18" height="18" style={{ marginLeft: '12px' }} />

//                         <div style={{ marginLeft: '10px' }} > {item.likes} </div>

//                         <p style={{ marginLeft: '10px' }}>Likes</p>

//                     </div>


//                     <div style={{ padding: '0 20px' }}>

//                         {item.comments} Comments

//                     </div>
//                 </div >

//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1120px' }}>

//                     <img src={gapIcon} alt="My SVG" />

//                 </div>

//                 <div style={{ height: '48px', alignItems: 'center', display: "flex", justifyContent: 'space-evenly', fontWeight: 500 }}  >
//                     <div
//                         style={{ display: "flex", alignItems: 'center', cursor:"pointer" }}
//                         onClick={()=>handleLike(item.id)}
//                     >
//                         <CustomIcon id={'like'} color={item.didLike ? '#0A66C2' : '#737877'} /> <span style={{ marginLeft: '5px', color: `${item.didLike ? '#0A66C2' : '#737877'}` }}> Like</span>  </div>
//                     <div
//                     >
//                         Comment
//                     </div>

//                 </div>
//             </div>


//         )
//     }


//     return (
//         <div style={{ fontFamily: 'DM Sans' }}>
//             {createHeader()}

//             {createImages()}

//             {createFooter()}
//         </div>
//     )

// }


// export default FeedItem

import * as React from 'react';
import { feedInterface } from '../../../types/types';
import like from '../../../Assets/Images/like.png';
import gapIcon from '../../../Assets/Icons/Vector 2.svg';
import CustomIcon from '../../../Assets/Icons/icons';
import styles from './FeedItem.module.scss'; // Import the SCSS module

interface ComponentProps {
    item: feedInterface;
    setFeedMap: React.Dispatch<React.SetStateAction<{ [key: string]: feedInterface }>>;
}

const translateTime = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now.getTime() - date.getTime();
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now';
    }
};

const FeedItem = (props: ComponentProps) => {
    const { item, setFeedMap } = props;
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    const handleLike = (id: string) => {
        setFeedMap(prevFeedArr => ({
            ...prevFeedArr,
            [id]: {
                ...prevFeedArr[id],
                didLike: !prevFeedArr[id]?.didLike,
                likes: prevFeedArr[id]?.didLike ? prevFeedArr[id].likes - 1 : prevFeedArr[id].likes + 1,
            },
        }));
    };

    const createHeader = () => {
        const time = translateTime(item.date);
        return (
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                        <img src={item.avatar} alt="User Avatar" />
                    </div>
                    <div className={styles.username}>
                        <p>{item.username}</p>
                        <div className={styles.shopInfo}>
                            <span>{item.shopName}</span>
                            <span> · {time}</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.text} ${isExpanded ? styles.expanded : ''}`} onClick={toggleExpand}>
                    {item.text}
                </div>
            </div>
        );
    };

    const createImages = () => {
        const isOneImage: boolean = item.images.length === 1;
        if (!isOneImage) {
            item.images = item.images.slice(0, 2);
        }

        return (
            <div className={styles.images}>
                {item.images.map((image, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        );
    };

    const createFooter = () => {
        return (
            <div className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <div className={styles.likeInfo}>
                        <img src={like} width="18" height="18" alt="Like" />
                        <div className={styles.likesCount}>{item.likes}</div>
                        <p>Likes</p>
                    </div>
                    <div className={styles.commentsCount}>{item.comments} Comments</div>
                </div>
                <div className={styles.separator}>
                    <img src={gapIcon} alt="Separator" />
                </div>
                <div className={styles.actions}>
                    <div className={styles.likeButton} onClick={() => handleLike(item.id)}>
                        <CustomIcon id={'like'} color={item.didLike ? '#0A66C2' : '#737877'} />
                        <span style={{ color: `${item.didLike ? '#0A66C2' : '#737877'}` }}> Like</span>
                    </div>
                    <div className={styles.likeButton} onClick={() => handleLike(item.id)}>
                        <CustomIcon id={'comment'} color='#737877' />
                        <span> Comment</span>
                    </div>

                </div>
            </div>
        );
    };

    return (
        <div className={styles.feedItem}>
            {createHeader()}
            {createImages()}
            {createFooter()}
        </div>
    );
};

export default FeedItem;
