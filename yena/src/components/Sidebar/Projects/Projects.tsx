import React, { useState } from 'react';
import styles from './Projects.module.scss';
import { ArrowDown2 } from 'iconic-react';

interface Project {
    id: number;
    name: string;
    color: string;
}

interface ProjectsProps {
    isOpen: boolean;
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ isOpen, projects }) => {
    const [isProjectsVisible, setProjectsVisible] = useState(true);

    const toggleProjectsVisibility = () => {
        setProjectsVisible(!isProjectsVisible);
    };

    const ProjectItem: React.FC<{ project: Project; isOpen: boolean }> = ({ project, isOpen }) => (
        <li className={styles.projectItem}>
            <a>
                <div>
                    <div className={styles.indicator} style={{ backgroundColor: project.color }}></div>
                </div>
                <span className={`${styles.projectName} ${!isOpen ? styles.textHidden : ''}`}>
                    {project.name}
                </span>
            </a>
        </li>
    );

    return (
        <div className={styles.projects}>
            <div className={styles.header}>
                <div
                    className={`${styles.icon} ${!isProjectsVisible ? styles.rotated : ''}`}
                    onClick={toggleProjectsVisibility}
                >
                    <ArrowDown2 />
                </div>
                <h2 className={`${!isOpen ? styles.textHidden : ''}`}>Projects</h2>
            </div>

            {isProjectsVisible && (
                <ul className={styles.projectList}>
                    {projects.map((project) => (
                        <ProjectItem key={project.id} project={project} isOpen={isOpen} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Projects;
