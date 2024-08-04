'use client'

import React from 'react';
import styles from './ProfilePicture.module.scss';

interface ProfilePictureProps {
    imageUrl: string;
    isEditing: boolean;
    onChange: (url: string) => void;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl, isEditing, onChange }) => {
    const handleImageChange = () => {
        const newUrl = prompt("Enter new image URL:", imageUrl);
        if (newUrl) {
            onChange(newUrl);
        }
    };

    const handleImageRemove = () => {
        onChange('');
    };

    return (
        <div className={styles.profilePicture}>
            <img src={imageUrl} alt="Profile" className={styles.image} />
            {isEditing && (
                <div className={styles.buttons}>
                    <button className={styles.changeButton} onClick={handleImageChange}>Change</button>
                    <button className={styles.removeButton} onClick={handleImageRemove}>Remove</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePicture;
