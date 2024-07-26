import React from 'react';
import styles from './DashboardItem.module.scss';

import ProfilePicture from '../ProfilePicture/ProfilePicture';

const DashboardItem = ({project}) => {
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
                        <ProfilePicture key={user.id} src={user.avatar} alt={user.name} className={styles.userAvatar}/>
                    ))}
                </div>
            </div>

            <div className={styles.daysToComplete}>{project.daysToComplete} днів</div>

            <div className={styles.stack}>
                {project.stack?.slice(0, 3).map((tag, index) => (
                    <div key={index} className={styles.stackCircle}></div>
                ))}
                <span>Java, HTML, Pолтон, Мевена</span>
            </div>

            <br/>
        </div>
    );
};

export default DashboardItem;
