'use client';

import { useParams } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import Project from '@/components/Project/Project';
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from './page.module.scss';

export default function ProjectPage() {
    const { id } = useParams();
    const project = projectsData.find(project => project.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <Sidebar />
            <div className={styles.projectPage}>
                <Project
                    name={project.name}
                    status={project.status}
                    description={project.description}
                    daysToComplete={project.daysToComplete}
                    color={project.color}
                    users={project.users}
                    stack={project.stack}
                />
            </div>
        </>
    );
}
