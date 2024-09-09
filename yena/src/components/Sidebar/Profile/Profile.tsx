import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { ProfileRemove } from 'iconic-react';
import styles from './Profile.module.scss';

interface ProfileProps {
    name: string;
    status: string;
    imageUrl: string;
    userStatus: "Online" | "Busy" | "Away" | "Offline";
    isOpen: boolean;
}

const Profile: React.FC<ProfileProps> = ({ name, status, imageUrl, userStatus, isOpen }) => {
    const { data: session } = useSession();

    return (
        <div className={styles.profile}>
            {session ? (
                <>
                    <Link href={'/profile'} passHref={true} legacyBehavior={true}>
                        <div className={styles.imageWrapper}>
                            <motion.img
                                src={imageUrl}
                                alt={`${name}'s profile`}
                                className={styles.image}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <div className={`${styles.statusIndicator} ${styles[userStatus]}`}></div>
                        </div>
                    </Link>
                    <div className={`${styles.textWrapper} ${!isOpen ? styles.textHidden : ''}`}>
                        <h3 className={`${styles.name} ${!isOpen ? styles.textHidden : ''}`}>
                            {name}
                        </h3>
                        <p className={`${styles.status} ${!isOpen ? styles.textHidden : ''}`}>
                            {status}
                        </p>
                    </div>
                    {isOpen && (
                        <div className={styles.profileExitWrapper}>
                            <button className={styles.logoutButton} onClick={() => signOut({ callbackUrl: '/' })}>
                                <ProfileRemove variant="Outline" />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className={styles.profileEnterWrapper}>
                    <Link href={'/auth'} className={styles.loginButton}>Sign in</Link>
                </div>
            )}
        </div>
    );
};

export default Profile;
