import React from 'react';
import styles from '../Dashboard.module.scss';

const DashboardItem = ({ project }) => {
    return (
        <div className={styles.dashboardItem}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.users}>
                {project.users.slice(0, 3).map(user => (
                    <img key={user.id} src={user.avatar} alt={user.name} className={styles.userAvatar} />
                ))}
            </div>
            <p className={styles.daysToComplete}>{project.daysToComplete} днів на розробку</p>
            <div className={styles.tags}>
                {project.stack?.slice(0, 3).map((tag, index) => (
                    <div key={index} className={styles.tagCircle}></div>
                ))}
                <span>Тестовий текст</span>
            </div>
        </div>
    );
};

export default DashboardItem;
