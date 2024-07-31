import ProfilePicture from '../../public/img/profile-img.png';

export const users = [
    {
        id: 1,
        name: "Иван",
        surname: "Иванов",
        birthDate: "1990-05-12",
        profilePicture: ProfilePicture,
        socialLinks: {
            telegram: "https://t.me/ivan_ivanov",
            github: "https://github.com/ivan-ivanov",
            reddit: "https://www.reddit.com/user/ivan-ivanov",
            facebook: "https://www.facebook.com/ivan.ivanov",
            linkedin: "https://www.linkedin.com/in/ivan-ivanov"
        },
        status: "Active Frontend Developer",
        userStatus: "Busy",
        description: "Frontend разработчик с опытом работы более 10 лет. Специализируюсь на React и Vue.js.",
        stacks: ["React", "Vue.js", "TypeScript"],
        skills: ["JavaScript", "CSS", "HTML", "Redux"],
        projects: [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]
    },
    {
        id: 2,
        name: "Анна",
        surname: "Смирнова",
        birthDate: "1992-08-25",
        profilePicture: "/images/anna-smirnova.jpg",
        socialLinks: {
            telegram: "https://t.me/anna_smirnova",
            github: "https://github.com/anna-smirnova",
            reddit: "https://www.reddit.com/user/anna-smirnova",
            facebook: "https://www.facebook.com/anna.smirnova",
            linkedin: "https://www.linkedin.com/in/anna-smirnova"
        },
        status: "Experienced UI/UX Designer",
        userStatus: "Busy",
        description: "UI/UX дизайнер с богатым опытом работы в создании интерфейсов для веб-приложений.",
        stacks: ["UI/UX", "Adobe XD", "Figma"],
        skills: ["Wireframing", "Prototyping", "User Research"],
        projects: [
            { id: 2 },
            { id: 3 },
            { id: 5 }
        ]
    },
    {
        id: 3,
        name: "Петр",
        surname: "Петров",
        birthDate: "1988-11-30",
        profilePicture: "/images/petr-petrov.jpg",
        socialLinks: {
            telegram: "https://t.me/petr_petrov",
            github: "https://github.com/petr-petrov",
            reddit: "https://www.reddit.com/user/petr-petrov",
            facebook: "https://www.facebook.com/petr.petrov",
            linkedin: "https://www.linkedin.com/in/petr-petrov"
        },
        status: "Seasoned Backend Developer",
        userStatus: "Offline",
        description: "Backend разработчик с опытом работы в Python и Node.js. Работал над крупными проектами в различных областях.",
        stacks: ["Python", "Node.js", "Django"],
        skills: ["API Development", "Database Management", "Cloud Services"],
        projects: [
            { id: 1 },
            { id: 4 },
            { id: 5 },
            { id: 10 },
            { id: 7 },
            { id: 6 }
        ]
    }
];
