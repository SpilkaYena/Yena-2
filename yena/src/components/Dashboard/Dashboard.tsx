import React from 'react';
import styles from './Dashboard.module.scss';
import { projectsData } from './projectsData';
import DashboardItem from './DashboardItem/DashboardItem';
import FilterBar from './FilterBar/FilteBar';

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <FilterBar />
            <div className={styles.dashboardItemsContainer}>
                {projectsData.map((project, index) => (
                    <DashboardItem key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
