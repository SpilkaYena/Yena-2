// Profile.tsx
import React from 'react';
import styles from './Profile.module.scss';

interface ProfileProps {
    name: string;
    status: string;
    imageUrl: string;
    userStatus: "Online" | "Busy" | "Away" | "Offline";
    isOpen: boolean;
}

const Profile: React.FC<ProfileProps> = ({ name, status, imageUrl, userStatus, isOpen }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} alt={`${name}'s profile`} className={styles.image} />
                <div className={`${styles.statusIndicator} ${styles[userStatus]}`}></div>
            </div>
            <div className={`${styles.textWrapper} ${!isOpen ? styles.textHidden : ''}`}>
                <h3 className={`${styles.name} ${!isOpen ? styles.textHidden : ''}`}>{name}</h3>
                <p className={`${styles.status}  ${!isOpen ? styles.textHidden : ''}`}>{status}</p>
            </div>
        </div>
    );
};

export default Profile;
