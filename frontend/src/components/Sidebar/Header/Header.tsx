import React from 'react';
import { motion } from 'framer-motion';
import { HambergerMenu } from 'iconic-react';
import Logo from '@/../public/img/logo.svg';
import styles from './Header.module.scss';

interface HeaderProps {
    isOpen: boolean;
    onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, onToggleSidebar }) => {
    return (
        <div className={styles.header}>
            <motion.img
                src={Logo.src}
                alt="Logo"
                className={styles.logo}
                initial={{ opacity: 0, scale: 0.8 , delay: 2.2}}
                animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeIn' , type: 'spring', stiffness: 200, damping: 13}}
            />
            <div>
                <motion.button
                    className={styles.burgerMenu}
                    onClick={onToggleSidebar}
                    whileHover={{scale: 1.2, rotate: -2}}
                    whileTap={{scale: 0.8}}
                    transition={{type: 'spring', stiffness: 400, damping: 10}}
                >
                    <motion.div
                        initial={{rotate: 90}}
                        animate={{rotate: isOpen ? 90 : 0}}
                        transition={{duration: 0.3}}
                    >
                        <HambergerMenu/>
                    </motion.div>
                </motion.button>
            </div>
        </div>
    );
};

export default Header;