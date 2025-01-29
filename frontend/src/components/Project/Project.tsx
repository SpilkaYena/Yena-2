import Image from 'next/image';
import styles from './Project.module.scss';
import Button from "@/components/Button/Button";
import React from "react";
import { stackColors, Stack } from '@/data/stacksData';

interface User {
    id: number;
    name: string;
    avatar: string;
}

interface ProjectProps {
    name: string;
    status: string;
    description: string;
    daysToComplete: number;
    users: User[];
    stack: Stack[];
}

export default function Project({ name, status, description, daysToComplete, users, stack }: ProjectProps) {
    return (
        <div className={styles.project}>
            <div className={styles.header}>
                <div>
                    <h3>Description:</h3>
                    <h1>{name}</h1>
                </div>
                <div className={`${styles.status} ${styles[status.replace(/\s+/g, '').toLowerCase()]}`}>
                    {status}
                </div>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.leftColumn}>
                    <h3>Users:</h3>
                    <ul className={styles.users}>
                        {users.map(user => (
                            <li key={user.id}>
                                <Image src={user.avatar} alt={user.name} width={40} height={40}/>
                                <span className={styles.tooltip}>{user.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.rightColumn}>
                    <strong>Days to complete:</strong> {daysToComplete}
                </div>
            </div>
            <div className={styles.stackSection}>
                <h3>Technologies:</h3>
                <ul className={styles.stackList}>
                    {stack.map((tech, index) => (
                        <li key={index} className={styles.stackItem}>
                            <div className={styles.circle} style={{backgroundColor: stackColors[tech]}}></div>
                            <span>{tech}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Description:</h3>
                <p>{description}</p>
            </div>
            <div className={styles.buttonContainer}>
                <Button variant="filled" onClick={() => console.log('update')}>Respond</Button>
            </div>
        </div>
    );
}
