'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/hooks/useLang';

import MenuItems from './MenuItems/MenuItems';
import Projects from './Projects/Projects';
import Profile from './Profile/Profile';
import Header from './Header/Header';

import styles from './Sidebar.module.scss';

import { users } from '@/data/usersData';
import { projectsData } from '@/data/projectsData';

const selectedUserId = 3;

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, translations } = useLang();

    const currentUser = users.find(user => user.id === selectedUserId);

    if (!currentUser) {
        return <div>User not found</div>;
    }

    const userProjects = projectsData.filter(project =>
        currentUser.projects.some(userProject => userProject.id === project.id)
    );

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <motion.aside
            className={styles.sidebar}
            initial={{ width: 75 }}
            animate={{ width: isOpen ? 300 : 75 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
        >
            <Header isOpen={isOpen} onToggleSidebar={toggleSidebar} />
            <nav className={styles.nav}>
                <MenuItems isOpen={isOpen} lang={lang} translations={translations} />
                <Projects isOpen={isOpen} projects={userProjects} />
            </nav>
            <Profile
                name={currentUser.name}
                status={currentUser.status}
                imageUrl={currentUser.profilePicture}
                userStatus={currentUser.userStatus}
                isOpen={isOpen}
            />
        </motion.aside>
    );
};

export default Sidebar;
