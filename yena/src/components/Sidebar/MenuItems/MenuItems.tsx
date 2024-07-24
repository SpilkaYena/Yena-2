import React from 'react';
import Link from 'next/link';
import styles from '../Sidebar.module.scss';

interface MenuItemProps {
    href: string;
    icon: string;
    label: string;
    isOpen: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, icon, label, isOpen }) => {
    return (
        <li>
            <Link href={href} passHref={true} legacyBehavior={true}>
                <a>
                    <img src={icon} alt={label} className={styles.icon} />
                    <span className={`${styles.text} ${!isOpen ? styles.textHidden : ''}`}>
                        {label}
                    </span>
                </a>
            </Link>
        </li>
    );
};

interface MenuItemsProps {
    items: { href: string; icon: string; label: string }[];
    isOpen: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, isOpen }) => {
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
