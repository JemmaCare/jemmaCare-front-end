import { BookOpen, CircleUserIcon, EarthLock, LayoutDashboard, LogOut, RadioReceiver, Theater } from "lucide-react";

const K2 = {
    NAVLINKS: [
        {
            icon: < LayoutDashboard />,
            text: "Overview",
            link: "/admdashboard"
        },
        {
            icon: <CircleUserIcon />,
            text: "Articles",
            link: "/admdashboard/articles"
        },
        {
            icon: <Theater />,
            text: "Therapists",
            link: "/admdashboard/therapists"
        },
        {
            icon: <EarthLock />,
            text: "Support",
            link: "/admdashboard/support"
        },
        {
            icon: <RadioReceiver />,
            text: "Reviews",
            link: "/admdashboard/reviews"
        },
        {
            icon: <BookOpen />,
            text: "User",
            link: "/admdashboard/user"
        },
        {
            icon: < LogOut/>,
            text: "Logout",
             link: "/signup"
        },

    ],

    OVERVIEW: [
        {
            icon: < LayoutDashboard />,
            text: "Overview",
            total: 5,
        },
        {
            icon: <CircleUserIcon />,
            text: "Articles",
            total: 5,
        },
        {
            icon: <Theater />,
            text: "Therapists",
            total: 5,
        },
        {
            icon: <EarthLock />,
            text: "Support",
            total: 5,
        },
        {
            icon: <RadioReceiver />,
            text: "Reviews",
            total: 5,
        },
        {
            icon: <BookOpen />,
            text: "User",
            total: 5,
        },

    ],

    REVIEWS: [
        {
            name: "HTML",
            levelOfProciency: "Advanced",
        },
        {
            name: "CSS",
            levelOfProciency: "Advanced",
        },
        {
            name: "JavaScript",
            levelOfProciency: "Intermediate",
        },
        
    ],

    THERAPISTS: [
        {
            company: 'Company A',
            position: 'Frontend Developer',
            duration: 'July 2024 - Present',
            description: 'Focused on creating responsive UI components with React and Tailwind CSS.',
        },
        {
            company: 'Company B',
            position: 'Backend Developer',
            duration: 'Jun 2021 - Dec 2023',
            description: 'Specialized in server-side logic, database management, and API development to support front-end functionalities.',
        },
        {
            company: 'Company C',
            position: 'Software Engineer',
            duration: 'Jan 2020 - Feb 2021',
            description: 'Worked on developing scalable web applications using React and Node.js.',
        },

    ],

    USERS: [
        {
            name: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with user authentication, product management, and order processing. Built with React, Node.js, Express, and MongoDB.',
            contributors: ['John Doe', 'Jane Smith'],
            institution: 'Tech Solutions Inc.',
            startDate: 'January 1, 2023',
            endDate: 'June 1, 2023',
            
          },
          {
            name: 'Social Media App',
            contributors: ['Emily Brown', 'Michael Johnson'],
            institution: 'Web Apps Ltd.',
            description: 'A social media application with real-time chat, post creation, and user profiles. Developed using React, Firebase, and Tailwind CSS.',
            startDate: 'March 1, 2023',
            endDate: 'December 31, 2023',
            
          },
          {
            name: 'Project Management Tool',
            description: 'A project management tool that allows teams to collaborate, track progress, and manage tasks. Implemented with Vue.js, Laravel, and MySQL.',
            contributors: ['David Lee', 'Sarah Wilson'],
            institution: 'Tech Solutions Inc.',
            startDate: 'July 1, 2023',
            endDate: 'December 31, 2023',
            
          },
    ],

    SUPPORT: [
        {
            institution: 'MEST Africa',
            location: 'Accra',
            program: 'Full Stack Developer Bootcamp',
            qualification: 'Certificate',
            startDate: 'January 2023',
            endDate: 'December 2023',
          },
          {
            institution: 'University of Ghana',
            location: 'Accra',
            program: 'Frontend Development',
            qualification: 'Diploma',
            startDate: 'February 2022',
            endDate: 'November 2022',
          },
          {
            institution: 'University of Ghana',
            location: 'Accra',
            program: 'Backend Development',
            qualification: 'Diploma',
            startDate: 'February 2022',
            endDate: 'November 2022',
          },
    ]
};
export default K2