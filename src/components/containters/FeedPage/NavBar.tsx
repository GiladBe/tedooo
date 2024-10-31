// src/components/NavBar.tsx
import * as React from 'react';
import image from '../../../Assets/Images/tedoo_logo.png';
import GenericSearchBar from '../../common/GenericSearchBar';
import userProfilePic from '../../../Assets/Images/userProfilePic.png';
import CustomIcon from "../../../Assets/Icons/icons";
import '@fontsource/poppins';
import styles from './NavBar.module.scss'; // Import the SCSS module

const NavBar = () => {
    const handleSearch = (query: string) => {
        // TO DO : implement search functionality
    };
    
    const [selectedTab, setSelectedTab] = React.useState<number>(0);

    const navBarTabs = [
        { label: 'Home', icon: 'home' },
        { label: 'Messaging', icon: 'message' },
        { label: 'Notifications', icon: 'notification' },
    ];

    const handleTabClick = (index: number) => {
        setSelectedTab(index);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles['navbar-content']}>
                <div className={styles['logo-search']}>
                    <img src={image} alt="Logo" />
                    <div className={styles['search-bar']}>
                        <GenericSearchBar onSearch={handleSearch} width={216} height={40} />
                    </div>
                </div>

                <div className={styles.tabs}>
                    {navBarTabs.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={styles.tab} // Use the tab class
                        >
                            <CustomIcon id={tab.icon} color={selectedTab === index ? "#2DB8A1" : "#949796"} />
                            <span style={{ color: selectedTab === index ? "#2DB8A1" : "#949796" }}>{tab.label}</span>
                        </div>
                    ))}
                    <img src={userProfilePic} alt="Profile" className={styles['profile-pic']} /> {/* Add class name */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
