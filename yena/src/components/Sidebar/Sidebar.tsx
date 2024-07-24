import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Sidebar.module.scss';
import BurgerMenuIcon from '../../../public/img/burger-menu.svg';
import Logo from '../../../public/img/logo.svg';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div>
            <motion.aside
                className={styles.sidebar}
                initial={{ width: 75 }}
                animate={{ width: isOpen ? 320 : 75 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
            >
                <button className={styles.burgerMenu} onClick={toggleSidebar}>
                    <motion.img
                        src={BurgerMenuIcon.src}
                        alt="Menu"
                        initial={{ rotate: -90 }}
                        animate={{ rotate: isOpen ? 0 : -90 }}
                        transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                    />
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <img src={Logo.src} alt="Logo" className={styles.logo} />
                            <nav className={styles.nav}>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.aside>
        </div>
    );
};

export default Sidebar;
