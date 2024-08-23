import React from 'react';
import styles from './DashboardItem.module.scss';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { stackColors } from '@/data/stacksData';

const DashboardItem = ({ project }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Done':
                return styles.done;
            case 'In progress':
                return styles.inProgress;
            case 'Ready to start':
                return styles.readyToStart;
            case 'Searching':
                return styles.searching;
            default:
                return '';
        }
    };

    return (
        <div className={styles.dashboardItem}>
            <div className={styles.projectName}>{project.name}</div>

            <div className={styles.dashboardElement}>
                <div className={`${styles.status} ${getStatusClass(project.status)}`}>
                    {project.status}
                </div>
            </div>

            <div className={styles.projectDescription}>{project.description}</div>

            <div className={styles.dashboardElement}>
                <div className={styles.users}>
                    {project.users.slice(0, 3).map(user => (
                        <li key={user.id}>
                            <ProfilePicture src={user.avatar} alt={user.name} className={styles.userAvatar}/>
                            <span className={styles.tooltip}>{user.name}</span>
                        </li>
                    ))}
                </div>
            </div>

            <div className={styles.daysToComplete}>{project.daysToComplete} днів</div>

            <div className={styles.stack}>
                <div className={styles.stackCircles}>
                    {project.stack?.map((tech, index) => (
                        <div
                            key={index}
                            className={styles.stackCircle}
                            style={{ backgroundColor: stackColors[tech] }}
                        >
                            <span className={styles.tooltip}>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>

            <br />
        </div>
    );
};

export default DashboardItem;
