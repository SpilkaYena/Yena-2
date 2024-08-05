import React from 'react';
import styles from './Profile.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProfileProps {
    name: string;
    status: string;
    imageUrl: string;
    userStatus: "Online" | "Busy" | "Away" | "Offline";
    isOpen: boolean;
}

const Profile: React.FC<ProfileProps> = ({ name, status, imageUrl, userStatus, isOpen }) => {
    return (
        <Link href={'/profile'} passHref={true} legacyBehavior={true}>
            <div className={styles.profile}>
                <div className={styles.imageWrapper}>
                    <motion.img
                        src={imageUrl}
                        alt={`${name}'s profile`}
                        className={styles.image}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{scale: 0.8}}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className={`${styles.statusIndicator} ${styles[userStatus]}`}></div>
                </div>
                <div className={`${styles.textWrapper} ${!isOpen ? styles.textHidden : ''}`}>
                    <h3 className={`${styles.name} ${!isOpen ? styles.textHidden : ''}`}>
                        {name}
                    </h3>
                    <p className={`${styles.status} ${!isOpen ? styles.textHidden : ''}`}>
                        {status}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Profile;
