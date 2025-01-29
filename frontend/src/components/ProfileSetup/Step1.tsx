import React from 'react';
import styles from './ProfileSetup.module.scss';

interface Step1Props {
    userData: any;
    onUpdate: (field: string, value: string) => void;
    onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ userData, onUpdate, onNext }) => {
    return (
        <div>
            <h2 className={styles.title}>Step 1: Personal Info</h2>
            <div className={styles.formWrapper}>
                <input
                    type="text"
                    value={userData.name}
                    placeholder="Name"
                    onChange={(e) => onUpdate('name', e.target.value)}
                />
                <input
                    type="text"
                    value={userData.surname}
                    placeholder="Surname"
                    onChange={(e) => onUpdate('surname', e.target.value)}
                />
                <input
                    type="date"
                    value={userData.birthDate}
                    onChange={(e) => onUpdate('birthDate', e.target.value)}
                />
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={onNext} className={styles.plainButton}>Next</button>
            </div>
        </div>
    );
};

export default Step1;
