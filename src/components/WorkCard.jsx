/* eslint-disable react/jsx-key */
import data from '../myData.json'
import { Button } from 'flowbite-react';
import { BsArrowRight } from 'react-icons/bs'
import { PiCodeDuotone } from 'react-icons/pi'
import { TbBrandAirbnb } from 'react-icons/tb'
import { DiGithubAlt } from 'react-icons/di'
import { FiArrowUpRight } from 'react-icons/fi'
import { GiClothes } from 'react-icons/gi'


const WorkCard = () => {
    const {
        // name,
        // company,
        // description,
        // profilePicture,
        // contactInfo,
        // socials,
        projects,
        // skills,
    } = data

    {/** TODO: Fix: render this info! */}
    const projectIcons = [
        {
            icons: [
                {
                    link: "",
                    icon: <DiGithubAlt />,
                },
                {
                    link: "",
                    icon: <FiArrowUpRight />,
                },
            ],
        },
        // Add more projects and their icons
    ];

    const imageIcons = [
        <TbBrandAirbnb />,
        <GiClothes />,
    ]

    const projectsComponent = projects.map((project, index) => (
        <>
            <div key={index} className="flex flex-col w-full mt-5"> {/** Projects Container */}
                <div className="flex flex-col gap-3">
                    <div className="flex lg:gap-7">
                        {/* <img src={project.image} alt="Project 1" className="rounded-2xl w-0 lg:w-24 lg:max-h-24 md:visible" /> */}
                        <div className="rounded-2xl w-0 lg:w-28 lg:h-24 md:visible flex items-center justify-center dark-bg-color expand-hover">
                            <div key={index} className="text-5xl text-white shadow-lg">{imageIcons[index]}</div>
                        </div>
                        <div className="w-full flex flex-col gap-3 lg:max-h-24 justify-around">
                            <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
                                <div>
                                    <div className="font-semibold text-md">
                                    <span className="text-neutral-400">
                                        {project.dateYear} &middot;
                                    </span>
                                    <span className="dark-text-color ms-1">
                                        {project.name}
                                        {/* <FiArrowUpRight className="w-6 h-6" /> */}
                                    </span>
                                    </div>
                                </div>
                                {
                                    projectIcons.map((project, index) => (
                                        <div key={index} className="flex gap-3 text-2xl">
                                            {
                                                project.icons.map((icon, iconIndex) => {
                                                    <div key={iconIndex}>{icon.icon}</div>
                                                })
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <p className="text-md">{project.description}</p> 
                            {/* <a href="#" className="font-semibold">Learn More</a> */}
                        </div>
                    </div>
                    <div className="flex items-start flex-wrap gap-3 mt-3 mb-3">
                        {
                            project.languages.map((language, index) => (
                                <div key={index} className="capitalize font-semibold text-base px-4 py-2 rounded-full extra-light-bg-color whitespace-nowrap">{language}</div>
                            ))
                        }
                    </div>
                    <hr />
                </div>
            </div>
        </>
    ))

    return (
        <div className="mb-14">
            <div className="font-bold mb-5 lg:ms-7 text-center lg:text-left text-base mt-14">My Work</div>
            <div className="bg-white p-7 rounded-3xl w-full">
                <div className="flex items-center gap-2 text-neutral-400 uppercase font-semibold">
                    <PiCodeDuotone className="h-5 w-5" />
                    Projects
                </div>
                {projectsComponent}
                <Button className="expand-hover dark-bg-color w-full lg:w-52 p-2 rounded-2xl shadow-lg mt-7 ms-auto">
                    <p className="uppercase">
                        View All
                    </p>
                    <BsArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div> 
        </div>
    );
}
 
export default WorkCard;