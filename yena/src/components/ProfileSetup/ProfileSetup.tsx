'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import styles from './ProfileSetup.module.scss';

const ProfileSetup: React.FC = () => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(0);
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        birthDate: '',
        status: '',
        description: '',
        stacks: [],
        skills: []
    });
    const router = useRouter();

    const handleUpdate = (field: string, value: string) => {
        setUserData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:5000/profile', userData);
            router.push('/board');
        } catch (error) {
            console.error('Error submitting profile data:', error);
            console.log(userData);
        }
    };


    const pageVariants = {
        hidden: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? -25 : 25
        }),
        visible: { opacity: 1, x: 0 },
        exit: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 25 : -25
        })
    };

    const nextStep = () => {
        setDirection(1);
        setStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setDirection(-1);
        setStep(prevStep => prevStep - 1);
    };

    return (
        <div className={styles.container}>
            <AnimatePresence initial={false} mode="wait" custom={direction}>
                {step === 1 && (
                    <motion.div
                        key="step1"
                        custom={direction}
                        variants={pageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                    >
                        <Step1 userData={userData} onUpdate={handleUpdate} onNext={nextStep} />
                    </motion.div>
                )}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        custom={direction}
                        variants={pageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                    >
                        <Step2 userData={userData} onUpdate={handleUpdate} onPrev={prevStep} onNext={nextStep} />
                    </motion.div>
                )}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        custom={direction}
                        variants={pageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                    >
                        <Step3 userData={userData} onUpdate={handleUpdate} onPrev={prevStep} onSubmit={handleSubmit} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileSetup;
