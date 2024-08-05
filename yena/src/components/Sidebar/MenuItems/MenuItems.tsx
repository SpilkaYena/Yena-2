import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './MenuItems.module.scss';

import { Home, Profile2User } from 'iconic-react';

interface MenuItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    isOpen: boolean;
}

const MenuItems: React.FC<{ isOpen: boolean; lang: string; translations: any }> = ({ isOpen, lang, translations }) => {
    const items = [
        { href: '/board', icon: <Home className={styles.icon}/>, label: translations[lang].board.sidebar.menuItems.dashboard },
        { href: '/users', icon: <Profile2User className={styles.icon}/>, label: translations[lang].board.sidebar.menuItems.users },
    ];

    const MenuItem: React.FC<MenuItemProps> = ({ href, icon, label, isOpen }) => {
        return (
            <li>
                <motion.div
                    className={styles.menuItem}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 1}}
                    transition={{type: 'spring', stiffness: 400, damping: 15}}
                >
                    <Link href={href} passHref={true} legacyBehavior={true}>
                        <a>
                            <div className={styles.icon}>
                                {icon}
                            </div>
                            <motion.span
                                className={`${styles.text} ${!isOpen ? styles.textHidden : ''}`}
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20}}
                                transition={{duration: 0.3, delay: 0.2, ease: 'easeInOut'}}
                            >
                                {label}
                            </motion.span>
                        </a>
                    </Link>
                </motion.div>
            </li>
        );
    };

    return (
        <ul>
            {items.map((item, index) => (
                <MenuItem
                    key={index}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    isOpen={isOpen}
                />
            ))}
        </ul>
    );
};

export default MenuItems;
