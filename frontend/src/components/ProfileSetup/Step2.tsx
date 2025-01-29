import React from 'react';
import {motion} from "framer-motion";
import styles from './ProfileSetup.module.scss';

interface Step2Props {
    userData: any;
    onUpdate: (field: string, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ userData, onUpdate, onPrev, onNext }) => {
    return (
        <div>
            <h2 className={styles.title}>Step 2: Status & Description</h2>
            <div className={styles.formWrapper}>
                <input
                    type="text"
                    value={userData.status}
                    placeholder="Status"
                    onChange={(e) => onUpdate('status', e.target.value)}
                />
                <textarea
                    value={userData.description}
                    placeholder="Description"
                    onChange={(e) => onUpdate('description', e.target.value)}
                />
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={onPrev} className={styles.plainButton}>Previous</button>
                <button onClick={onNext} className={styles.plainButton}>Next</button>
            </div>
        </div>
    );
};

export default Step2;
