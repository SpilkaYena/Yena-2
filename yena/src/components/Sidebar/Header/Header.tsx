import React from 'react';
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
            {isOpen && (
                <img src={Logo.src} alt="Logo" className={`${styles.logo} ${!isOpen ? styles.textHidden : ''}`} />
            )}
            <div>
                <button className={styles.burgerMenu} onClick={onToggleSidebar}>
                    <HambergerMenu/>
                </button>
            </div>
        </div>
    );
};

export default Header;