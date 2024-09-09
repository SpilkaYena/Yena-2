import React from 'react';
import {motion} from "framer-motion";
import EditableList from '@/components/Profile/EditableList/EditableList';
import styles from './ProfileSetup.module.scss';

interface Step3Props {
    userData: any;
    onUpdate: (field: string, value: string) => void;
    onPrev: () => void;
    onSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ userData, onUpdate, onPrev, onSubmit }) => {
    const handleAdd = (field: string, item: string) => {
        onUpdate(field, [...userData[field], item]);
    };

    const handleRemove = (field: string, index: number) => {
        onUpdate(field, userData[field].filter((_: string, i: number) => i !== index));
    };

    return (
        <div>
            <h2 className={styles.title}>Step 3: Stacks & Skills</h2>
            <div className={styles.formWrapper}>
                <EditableList
                    title="Stacks"
                    items={userData.stacks}
                    onAdd={(item) => handleAdd('stacks', item)}
                    onRemove={(index) => handleRemove('stacks', index)}
                />
                <EditableList
                    title="Skills"
                    items={userData.skills}
                    onAdd={(item) => handleAdd('skills', item)}
                    onRemove={(index) => handleRemove('skills', index)}
                />
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={onPrev} className={styles.plainButton}>Previous</button>
                <button onClick={onSubmit} className={styles.plainButton}>Submit</button>
            </div>
        </div>
    );
};

export default Step3;
