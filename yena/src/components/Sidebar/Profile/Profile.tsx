import React from 'react';
import styles from './Profile.module.scss';

interface ProfileProps {
    name: string;
    description: string;
    imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, description, imageUrl }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} alt="Profile" className={styles.image} />
            </div>
            <div className={styles.textWrapper}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default Profile;
