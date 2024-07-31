import React, { useState } from 'react';
import DashboardItem from './DashboardItem/DashboardItem';
import FilterBar from './FilterBar/FilterBar';
import { projectsData } from '@/data/projectsData';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    const [filteredData, setFilteredData] = useState(projectsData);

    const handleFilter = (searchText) => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const newFilteredData = projectsData.filter((project) => {
            return (
                project.name.toLowerCase().includes(lowerCaseSearchText) ||
                project.description.toLowerCase().includes(lowerCaseSearchText) ||
                project.stack.some((tech) =>
                    tech.toLowerCase().includes(lowerCaseSearchText)
                )
            );
        });
        setFilteredData(newFilteredData);
    };

    return (
        <div className={styles.dashboardContainer}>
            <FilterBar onFilter={handleFilter} />
            <div className={styles.dashboardItemsContainer}>
                {filteredData.map((project, index) => (
                    <DashboardItem key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;