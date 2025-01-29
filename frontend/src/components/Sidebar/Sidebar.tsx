'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/hooks/useLang';
import { useSession } from "next-auth/react";

import MenuItems from './MenuItems/MenuItems';
import Projects from './Projects/Projects';
import Profile from './Profile/Profile';
import Header from './Header/Header';

import styles from './Sidebar.module.scss';

import { users } from '@/data/usersData';
import { projectsData } from '@/data/projectsData';

const selectedUserId = 1;

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const savedState = localStorage.getItem('sidebar-open');
            return savedState === null ? true : JSON.parse(savedState);
        }
        return true;
    });

    const { lang, translations } = useLang();
    const session = useSession();

    console.log(session.data?.user);


    const currentUser = users.find(user => user.id === selectedUserId);

    if (!currentUser) {
        return <div>User not found</div>;
    }

    const userProjects = projectsData.filter(project =>
        currentUser.projects.some(userProject => userProject.id === project.id)
    );

    const toggleSidebar = () => {
        setIsOpen(prevState => {
            const newState = !prevState;
            localStorage.setItem('sidebar-open', JSON.stringify(newState));
            return newState;
        });
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: 1024px)`);
        if (mediaQuery.matches) {
            setIsOpen(false);
        }

        const handleResize = () => {
            if (mediaQuery.matches) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--sidebar-width', isOpen ? '300px' : '75px');
    }, [isOpen]);

    return (
        <>
            {isOpen && <div onClick={toggleSidebar}></div>}
            <motion.aside
                className={styles.sidebar}
                initial={{ width: 300 }}
                animate={{ width: isOpen ? 300 : 75 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ overflow: 'hidden' }}
            >
                <Header isOpen={isOpen} onToggleSidebar={toggleSidebar} />
                <nav className={styles.nav}>
                    <MenuItems isOpen={isOpen} lang={lang} translations={translations} />
                    <Projects isOpen={isOpen} projects={userProjects} />
                </nav>
                <Profile
                    name={session?.data?.user?.name}
                    status={currentUser.status}
                    imageUrl={session?.data?.user?.image}
                    userStatus={currentUser.userStatus}
                    isOpen={isOpen}
                />
            </motion.aside>
        </>
    );
};

export default Sidebar;
