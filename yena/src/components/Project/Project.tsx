import Image from 'next/image';
import styles from './Project.module.scss';
import Button from "@/components/Button/Button";
import React from "react";

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
    color: string;
    users: User[];
    stack: { tech: string, color: string }[]; // Updated stack to include color
}

export default function Project({ name, status, description, daysToComplete, color, users, stack }: ProjectProps) {
    return (
        <div className={styles.project}>
            <div className={styles.header}>
                <h1>{name}</h1>
                <div className={`${styles.status} ${styles[status.toLowerCase()]}`}>
                    {status}
                </div>
            </div>
            <div className={styles.users}>
                <h3>Participants</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Image src={user.avatar} alt={user.name} width={50} height={50} />
                            <span className={styles.tooltip}>{user.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
            <div className={styles.daysToComplete}>
                <strong>Days to complete:</strong> {daysToComplete}
            </div>
            <div className={styles.stack}>
                <h3>Tech Stack:</h3>
                <ul>
                    {stack.map((item, index) => (
                        <li key={index}>
                            <div className={styles.circle} style={{ backgroundColor: item.color }}></div>
                            {item.tech}
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant="filled" onClick={() => console.log('update')}>Update</Button>
        </div>
    );
}
