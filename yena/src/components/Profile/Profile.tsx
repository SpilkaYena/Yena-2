'use client'

import React, { useState } from 'react';
import { users } from '@/data/usersData';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ProfileField from './ProfileField/ProfileField';
import ProfileDescriptionField from './ProfileDescriptionField/ProfileDescriptionField';
import EditableList from './EditableList/EditableList';
import styles from './Profile.module.scss';

interface ProfileProps {
    userId: number;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
    const user = users.find(user => user.id === userId);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<any>(user || {});

    const handleInputChange = (field: string, value: string) => {
        setFormData(prevData => ({ ...prevData, [field]: value }));
    };

    const handleUpdate = () => {
        console.log('User updated:', formData);
        setIsEditing(false);
    };

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profile}>
                <div className={styles.left}>
                    <ProfilePicture imageUrl={user.profilePicture} alt={user.name} />
                    {['name', 'surname', 'birthDate', 'email'].map(field => (
                        <ProfileField
                            key={field}
                            label={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={formData[field]}
                            isEditing={isEditing}
                            onChange={(value) => handleInputChange(field, value)}
                        />
                    ))}
                    <div className={styles.actions}>
                        {isEditing ? (
                            <>
                                <button className={styles.cancelButton} onClick={() => setIsEditing(false)}>Cancel</button>
                                <button className={styles.updateButton} onClick={handleUpdate}>Update</button>
                            </>
                        ) : (
                            <button className={styles.editButton} onClick={() => setIsEditing(true)}>Edit</button>
                        )}
                    </div>
                </div>
                <div className={styles.right}>
                    <ProfileField
                        label="Status"
                        value={formData.status}
                        isEditing={isEditing}
                        onChange={(value) => handleInputChange('status', value)}
                    />
                    <ProfileDescriptionField
                        label="Description"
                        value={formData.description}
                        isEditing={isEditing}
                        onChange={(value) => handleInputChange('description', value)}
                        maxWords={100}
                    />
                    <div className={styles.listWrapper}>
                        <EditableList
                            title="Stacks"
                            items={formData.stacks}
                            onAdd={(item) => console.log('Add Stack', item)}
                            onRemove={(index) => console.log('Remove Stack', index)}
                        />
                        <EditableList
                            title="Skills"
                            items={formData.skills}
                            onAdd={(item) => console.log('Add Skill', item)}
                            onRemove={(index) => console.log('Remove Skill', index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
