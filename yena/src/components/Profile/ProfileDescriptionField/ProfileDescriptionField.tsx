'use client'

import React, { useState, useEffect } from 'react';
import styles from './ProfileDescriptionField.module.scss';

interface ProfileDescriptionProps {
    label: string;
    value: string;
    isEditing: boolean;
    onChange: (value: string) => void;
    maxWords?: number;
}

const ProfileDescriptionField: React.FC<ProfileDescriptionProps> = ({ label, value, isEditing, onChange, maxWords }) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const words = e.target.value.split(/\s+/).filter(Boolean);
        if (!maxWords || words.length <= maxWords) {
            setInputValue(e.target.value);
            onChange(e.target.value);
        }
    };

    return (
        <div className={styles.profileDescription}>
            <label className={styles.label}>{label}</label>
            {isEditing ? (
                <textarea
                    value={inputValue}
                    onChange={handleChange}
                    className={styles.textareaEditing}
                />
            ) : (
                <textarea
                    value={inputValue}
                    onChange={handleChange}
                    disabled
                />
            )}
        </div>
    );
};

export default ProfileDescriptionField;
