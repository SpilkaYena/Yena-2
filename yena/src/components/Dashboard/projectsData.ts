import ProfileUrl from '@/../public/img/profile-img.png';

export const projectsData = [
    {
        name: "Project 1",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: ProfileUrl },
            { id: 2, name: "User 2", avatar: '@/../public/img/profile-img.png'},
        ],
        daysToComplete: 15,
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Project 2",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: "/avatar1.png" },
            { id: 2, name: "User 2", avatar: "/avatar2.png" },
            { id: 3, name: "User 3", avatar: "/avatar3.png" },
        ],
        daysToComplete: 25,
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Project 3",
        description: "Test text",
        users: [
            { id: 1, name: "User 1", avatar: "/avatar1.png" },
            { id: 2, name: "User 2", avatar: "/avatar2.png" },
            { id: 3, name: "User 3", avatar: "/avatar3.png" },
        ],
        daysToComplete: 35,
        stack: ["HTML", "CSS", "JavaScript"],
    },
];
