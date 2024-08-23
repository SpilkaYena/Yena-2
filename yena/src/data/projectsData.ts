import ProfileUrl from '../../public/img/profile-img.png';

import { stackColors, Stack } from '@/data/stacksData';

interface User {
    id: number;
    name: string;
    avatar: string;
}

export interface Project {
    id: number;
    name: string;
    status: string;
    description: string;
    users: User[];
    daysToComplete: number;
    stack: Stack[];
    color: string;
}

export const projectsData = [
    {
        id: 1,
        name: "Project 1",
        status: "In progress",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: '' },
            { id: 2, name: "User 2", avatar: '' },
        ],
        daysToComplete: 15,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#FF5733",
    },
    {
        id: 2,
        name: "Project 2",
        status: "Ready to start",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 25,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#33FF57",
    },
    {
        id: 3,
        name: "Project 3",
        status: "In progress",
        description: "Test text1",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 35,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#3357FF",
    },
    {
        id: 4,
        name: "Project 4",
        status: "Searching",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 35,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#F3FF33",
    },
    {
        id: 5,
        name: "Project 5",
        status: "Done",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 25,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#FF33A1",
    },
    {
        id: 6,
        name: "Project 6",
        status: "Done",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 35,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#33FFF7",
    },
    {
        id: 7,
        name: "Project 7",
        status: "Searching",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 35,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#FFB733",
    },
    {
        id: 8,
        name: "Project 8",
        status: "Done",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 25,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#FF5733",
    },
    {
        id: 9,
        name: "Project 9",
        status: "Done",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 35,
        stack: ["HTML", "CSS", "JavaScript"],
        color: "#33FF57",
    },
    {
        id: 10,
        name: "Project 10",
        status: "Done",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: ProfileUrl },
            { id: 3, name: "User 3", avatar: ProfileUrl },
        ],
        daysToComplete: 35,
        stack: ["Python", "CSS", "JavaScript", "HTML", "CSS", "JavaScript"],
        color: "#3357FF",
    },
];
