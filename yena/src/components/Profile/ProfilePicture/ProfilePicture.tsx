'use client'

import React from 'react';

import { Trash, Image } from 'iconic-react';

import styles from './ProfilePicture.module.scss';


interface ProfilePictureProps {
    imageUrl: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl, onChange }) => {
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    onChange(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = () => {
        onChange('');
    };

    return (
        <div className={styles.profilePicture}>
            <img src={imageUrl} alt="Profile" className={styles.image} />
            <div className={styles.buttons}>
                <label htmlFor="fileInput" className={styles.fileLabel}>
                    <Image /> Change
                    <input
                        type="file"
                        id="fileInput"
                        className={styles.fileInput}
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </label>
                <button onClick={handleImageRemove}><Trash /> Remove</button>
            </div>
        </div>
    );
};

export default ProfilePicture;
