import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.scss';

interface Project {
    id: number;
    name: string;
}

interface ProjectItemProps {
    project: Project;
    isOpen: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, isOpen }) => {
    return (
        <li className={styles.projectItem}>
            <a>
                <div className={styles.indicator}></div>
                <span className={`${styles.projectName} ${!isOpen ? styles.textHidden : ''}`}>
                    {project.name}
                </span>
            </a>
        </li>
    );
};

const placeholderProjects: Project[] = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
];

const Projects: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.projects}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className={styles.header}>Projects</h2>
                    <ul className={styles.projectList}>
                        {placeholderProjects.map(project => (
                            <ProjectItem
                                key={project.id}
                                project={project}
                                isOpen={isOpen}
                            />
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Projects;
