import React from 'react';
import Link from 'next/link';
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
                <div className={styles.menuItem}>
                    <Link href={href} passHref={true} legacyBehavior={true}>
                        <a>
                            <div className={styles.icon}>{icon}</div>
                            <span className={`${styles.text} ${!isOpen ? styles.textHidden : ''}`}>{label}</span>
                        </a>
                    </Link>
                </div>
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
