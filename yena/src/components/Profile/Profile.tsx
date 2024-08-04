import React, { useState } from 'react';
import { users } from '@/data/usersData';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ProfileField from './ProfileField/ProfileField';
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
        setFormData((prevData: any) => ({ ...prevData, [field]: value }));
    };

    const handleUpdate = () => {
        // Логіка оновлення даних користувача
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
                    <ProfilePicture src={user.profilePicture} alt={user.name}/>
                    <ProfileField
                        label="Name"
                        value={formData.name}
                        isEditing={isEditing}
                        onChange={(value) => handleInputChange('name', value)}
                    />
                    <ProfileField
                        label="Surname"
                        value={formData.surname}
                        isEditing={isEditing}
                        onChange={(value) => handleInputChange('surname', value)}
                    />
                    <ProfileField
                        label="Date of Birth"
                        value={formData.birthDate}
                        isEditing={isEditing}
                        onChange={(value) => handleInputChange('birthDate', value)}
                    />
                    <ProfileField
                        label="Email"
                        value={formData.email}
                        isEditing={isEditing}
                        onChange={(value) => handleInputChange('email', value)}
                    />
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
                    <ProfileField
                        label="Description"
                        value={formData.description}
                        isEditing={isEditing}
                        onChange={(value) => handleInputChange('description', value)}
                        isLarge
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

    )
        ;
};

export default Profile;
