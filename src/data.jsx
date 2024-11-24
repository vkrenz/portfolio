// React Icons Import
import {
    PiInstagramLogoDuotone,
    PiTwitterLogoDuotone,
    PiLinkedinLogoDuotone,
    PiGithubLogoDuotone,
    PiCodepenLogoDuotone,
    PiDiscordLogoDuotone,
    PiGlobeHemisphereWestDuotone,
} from 'react-icons/pi'
import { TbBrandAirbnb } from 'react-icons/tb'

// Profile Image Import
import pfpImage from './assets/pfp.png';

const data = {
    // General Information
    name: "Victor Krenzel",
    description: "I'm a tech enthusiast, driven by curiosity and creativity, passionate about problem-solving and continuous learning.",
    photo: pfpImage,
    contact: {
        company: "Scotiabank",
        email: "vkrenzel@outlook.com",
        phone: "647-568-6382",
        location: "Toronto",
    },
    socials: [
        /** 6 Max socials */
        {
            name: "Instagram",
            link: "https://www.instagram.com/v.krzl/",
            icon: <PiInstagramLogoDuotone />,
            handle: "@v.krzl",
        },
        {   
            name: "Twitter",
            link: "https://twitter.com/vkrenzel",
            icon: <PiTwitterLogoDuotone />,
            handle: "@vkrenzel",
        },
        {   
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/vkrenz/",
            icon: <PiLinkedinLogoDuotone />,
            handle: "in/vkrenz",
        },
        {   
            name: "Github",
            link: "https://github.com/vkrenz",
            icon: <PiGithubLogoDuotone />,
            handle: "vkrenz",
        },
        {
            name: "Codepen",
            link: "https://codepen.io/vkrenzel",
            icon: <PiCodepenLogoDuotone />,
            handle: "vkrenz",
        },
        {
            name: "Discord",
            link: "https://discord.com",
            icon: <PiDiscordLogoDuotone />,
            handle: "osaprocky",
        },
    ],
    projects: [
        {
            name: "Portfolio",
            link: 'https://vkrenzel.vercel.app/home',
            githubLink: 'https://github.com/vkrenz/portfolio',
            dateYear: "2023",
            imageIcon: <PiGlobeHemisphereWestDuotone />,
            description:
                "A responsive portfolio built with React and Tailwind CSS to showcase my projects and skills. Includes dark mode, dynamic color themes, and an easily customizable structure.",
            languages: [
                {
                    name: "React", 
                    link: "https://react.dev/",
                },
                {
                    name: "Tailwind CSS",
                    link: "https://tailwindcss.com/",
                },
                {
                    name: "Firebase",
                    link: "https://firebase.google.com/",
                },
            ],
        },
        {
            name: "Airbnb Clone",
            link: 'https://bnb-nu.vercel.app/',
            githubLink: 'https://github.com/vkrenz/airbnb-clone',
            dateYear: "2023",
            imageIcon: <TbBrandAirbnb />,
            description:
                "A feature-rich Airbnb clone showcasing CRUD, user authentication, search filters, interactive maps, and efficient media management, highlighting my expertise in building innovative web applications.",
            languages: [
                {
                    name: "Typescript", 
                    link: "https://www.typescriptlang.org/",

                },
                {
                    name: "Next.js", 
                    link: "https://nextjs.org/blog/next-13",

                },
                {
                    name: "React", 
                    link: "https://react.dev/",

                },
                {
                    name: "MongoDB", 
                    link: "https://www.mongodb.com/"

                },
                {
                    name: "Tailwind CSS",
                    link: "https://tailwindcss.com/"
                },
            ],
        },
        {
            name: "Twitter Clone",
            link: '',
            githubLink: 'https://github.com/vkrenz/twitter-clone',
            dateYear: "2024",
            imageIcon: <PiTwitterLogoDuotone />,
            description:
                "An iOS Twitter-clone app built with Xcode, Swift UI, and Firebase. Features include user authentication, real-time tweets, likes, comments, following, and media uploads.",
            languages: [
                {
                    name: "SwiftUI", 
                    link: "https://developer.apple.com/xcode/swiftui/",
                },
                {
                    name: "XCode", 
                    link: "https://developer.apple.com/xcode/",

                },
                {
                    name: "Firebase",
                    link: "https://firebase.google.com/"
                },
            ],
        },
    ],
    experience: [
        {
            name: "React", 
            link: "https://react.dev/",
        },
        {
            name: "Tailwind CSS",
            link: "https://tailwindcss.com/",
        },
        {
            name: "Firebase",
            link: "https://firebase.google.com/",
        },
        {
            name: "Next.js", 
            link: "https://nextjs.org/blog/next-13",

        },
        {
            name: "Bootstrap",
            link: "https://getbootstrap.com/"
        },
        {
            name: "Typescript", 
            link: "https://www.typescriptlang.org/",

        },
        {
            name: "MongoDB", 
            link: "https://www.mongodb.com/",

        },
        {
            name: "Node.js",
            link: "https://nodejs.org/en",
        },
        {
            name: "jQuery",
            link: "https://jquery.com/",
        },
        {
            name: "Express.js",
            link: "https://expressjs.com/",
        },
        {
            name: "MySQL",
            link: "https://www.mysql.com/",
        },
        {
            name: "Oracle Database",
            link: "https://www.oracle.com/ca-en/database/sqldeveloper/"
        },
        {
            name: "Mongoose",
            link: "https://mongoosejs.com/"
        },
        {
            name: "Material UI",
            link: "https://mui.com/",
        },
        {
            name: "Shadcn/ui",
            link: "https://ui.shadcn.com/"
        },
        {
            name: "Flowbite",
            link: "https://flowbite.com/"
        }
    ],
    resume: {
        name: {
            firstName: "Victor",
            lastName: "Krenzel"
        },
        location: "Toronto, ON",
        postalCode: "M2R",
        phone: "+1 (647) 568-6382",
        email: "vkrenzel@outlook.com",
        linkedin: "linkedin.com/in/vkrenz",
        objective: "",
        education: {
            schoolName: "Seneca Polytechnic",
            schoolLocation: "Toronto, ON",
            credential: "Ontario College Diploma",
            program: "Computer Programming",
            gradYear: "2023",
            gradMonth: "December",
            // The rest are optional
            gpa: "3.8 (Summer 2023)",
            relevantCoursework: [
                "Database Systems",
                "Advanced Database Services",
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Web Programming Principles",
                "Software Testing",
                "Software Analysis and Design",
                "Project Management Fundamentals",
                "Business Communications",
                "Web Programming for Apps and Services",
            ]
        },
        experience: [
            {
                positionTitle: "Customer Experience Associate",
                company: "Scotiabank",
                location: "Toronto, ON",
                startDate: "April 2020",
                endDate: "Present",
                bulletPoints: [
                    "Conducted client due diligence for regulatory compliance during onboarding and policy changes.",
                    "Processed over $1 million in mortgages, payments, prepayments, and payouts each month with exceptional accuracy, ensuring compliance with bank policies and procedures.",
                    "Liaised with internal departments, reducing resolution times by 25% and ensuring smooth operations.",
                    "Promoted bank products and services, resulting in increased sales and customer retention.",
                    "Demonstrated strong problem-solving skills by addressing and resolving client issues efficiently.",
                    "Consistently exceeded performance targets by over 20%, contributing to the branch's overall success.",
                ]
            },
            {
                positionTitle: "Frontend Web Developer",
                company: "Amazing Print Tech",
                location: "Toronto, ON",
                startDate: "January 2017",
                endDate: "September 2017",
                bulletPoints: [
                    "Developed websites using HTML, CSS, JavaScript, and jQuery, enhancing user engagement by 25%.",
                    "Implemented SEO best practices, driving a 30% increase in organic traffic.",
                    "Managed cPanel/WHM servers, reducing downtime by 15%.",
                    "Optimized website performance, reducing page load times by 25%.",
                    "Utilized data analysis techniques to improve website functionality and user experience.",
                    "Coordinated with design and development teams to deliver high-quality web applications.",
                ]
            }
        ],
        projects: [
            {

            },
            {

            }
        ]
    }
};

export default data;
