'use client'

import React from 'react';
import styles from './ProfileField.module.scss';

interface ProfileFieldProps {
    label: string;
    value: string;
    isEditing: boolean;
    onChange: (value: string) => void;
    isLarge?: boolean;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value, isEditing, onChange, isLarge }) => {
    return (
        <div className={`${styles.profileField} ${isLarge ? styles.large : ''}`}>
            <label className={styles.label}>{label}</label>
            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={styles.input}
                />
            ) : (
                <p className={styles.value}>{value}</p>
            )}
        </div>
    );
};

export default ProfileField;
