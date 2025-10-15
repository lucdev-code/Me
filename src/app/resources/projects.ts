export const projects = [
    {
        title: "Gestor",
        description: "My role in this project was to develop the backend using NestJS. I also implemented guards to protect endpoints, signed data with JWT, and handled secure sessions as well as role-based access control.",
        image: "/images/gestor.png",
        technologies: ["Nestjs", "TypeScript", "Prisma"],
        githubUrl: "https://github.com/lucdev-code/BackEnd-Gestor",
        demoUrl: "https://nvnx-gestor-freetrial.vercel.app/",
    },
    {
        title: "Students CRUD",
        description: "I practiced my skills with Nodejs by building this CRUD. I implemented student validations for password creation and added logic to handle cases where a user did not set a password.",
        image: "/images/students.png",
        technologies: ["Nodejs", "PostgreSQL"],
        githubUrl: "https://github.com/lucdev-code/StudentsAPI/blob/master/app/src/back-end/middlewares/auth_middlewares.js",
    },
    {
        title: "Microservices",
        description: "I practiced microservices architecture using NestJS and implemented a gateway to manage communication between the microservices.",
        image: "/images/microservices.png",
        technologies: ["Nestjs", "Typescript", "Postman"],
        githubUrl: "https://github.com/microservices-lucdev/ms"
    },
];