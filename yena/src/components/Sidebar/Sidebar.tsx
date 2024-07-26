import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/hooks/useLang';

import MenuItems from './MenuItems/MenuItems';
import Projects from './Projects/Projects';
import Profile from './Profile/Profile';

import ProfileUrl from '@/../public/img/profile-img.png';
import BurgerMenuIcon from '../../../public/img/burger-menu.svg';
import Logo from '../../../public/img/logo.svg';
import DashboardIcon from '../../../public/img/dashboard-icon.svg';
import UsersIcon from '../../../public/img/users-icon.svg';
import TestIcon from '../../../public/img/test.svg';
import Test2Icon from '../../../public/img/test2.svg';

import styles from './Sidebar.module.scss';


const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, translations } = useLang();

    const menuItems = [
        { href: '/board', icon: DashboardIcon.src, label: translations[lang].board.sidebar.menuItems.dashboard },
        { href: '/users', icon: UsersIcon.src, label: translations[lang].board.sidebar.menuItems.users },
        { href: '/test', icon: TestIcon.src, label: translations[lang].board.sidebar.menuItems.test },
        { href: '/test2', icon: Test2Icon.src, label: translations[lang].board.sidebar.menuItems.test2 }
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div>
            <motion.aside
                className={styles.sidebar}
                initial={{ width: 75 }}
                animate={{ width: isOpen ? 300 : 75 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
            >
                <div className={styles.header}>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <img src={Logo.src} alt="Logo" className={styles.logo} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button className={styles.burgerMenu} onClick={toggleSidebar}>
                        <motion.img
                            src={BurgerMenuIcon.src}
                            alt="Menu"
                            initial={{ rotate: -90 }}
                            animate={{ rotate: isOpen ? 0 : -90 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </button>
                </div>
                <nav className={styles.nav}>
                    <MenuItems items={menuItems} isOpen={isOpen} />
                    <Projects isOpen={isOpen} />
                </nav>
                <Profile
                    name="Wassup Wassupпович"
                    description="Криптоинвестор і ще шось"
                    imageUrl= {ProfileUrl.src}
                />
            </motion.aside>
        </div>
    );
};

export default Sidebar;