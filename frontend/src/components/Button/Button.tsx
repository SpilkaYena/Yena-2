import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

interface ButtonProps {
    variant: 'filled' | 'outlined';
    onClick: () => void;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
    return (
        <motion.button
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{duration: 0.1}}
        >
            {children}
        </motion.button>
    );
};

export default Button;
