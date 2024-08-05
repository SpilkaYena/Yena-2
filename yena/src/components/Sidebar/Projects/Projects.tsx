import React, { useState } from 'react';
import styles from './Projects.module.scss';
import { ArrowDown2 } from 'iconic-react';
import { motion } from 'framer-motion';

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
                <motion.div
                    className={`${styles.icon} ${!isProjectsVisible ? styles.rotated : ''}`}
                    onClick={toggleProjectsVisibility}
                >
                    <ArrowDown2 />
                </motion.div>
                <motion.h2
                    className={`${!isOpen ? styles.textHidden : ''}`}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20}}
                    transition={{duration: 0.3, delay: 0.3, ease: 'easeInOut'}}>Projects</motion.h2>
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
