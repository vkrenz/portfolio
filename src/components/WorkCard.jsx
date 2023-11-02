/* eslint-disable react/jsx-key */
import data from '../data'

import { Button } from 'flowbite-react';

import { BsArrowRight } from 'react-icons/bs'
import { PiCodeDuotone } from 'react-icons/pi'

import { useDarkMode } from '../DarkModeContext';

const WorkCard = ({
    displayProjects = data.projects.length
}) => {
    const {
        projects,
    } = data

    const { isDarkMode } = useDarkMode()

    const projectsComponent = projects.map((project, index) => (
        <div key={index}>
            {/* Display only the first 2 projects (index <= 1) */}
            {index <= displayProjects - 1 && (
                <div key={index} className="flex flex-col w-full mt-5"> {/** Projects Container */}
                    <div className="flex flex-col gap-3">
                        <div className="flex lg:gap-7">
                            <div className={`transition rounded-2xl w-0 lg:w-28 lg:h-24 hidden lg:flex items-center justify-center ${isDarkMode ? 'extra-light-bg-color' : 'dark-bg-color'} expand-hover shadow-lg`}>
                                <div key={index} className={`text-5xl ${isDarkMode ? 'dark-text-color' : 'text-white'}`}>{project.imageIcon}</div>
                            </div>
                            <div className="w-full flex flex-col gap-3 lg:max-h-24 justify-around">
                                <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
                                    <div className="flex justify-center w-full md:justify-start">
                                        <div className="font-semibold text-md flex gap-3 items-center">
                                            <span className="flex lg:hidden text-2xl">
                                                {project.imageIcon}
                                            </span>
                                            <span className={`${isDarkMode ? 'light-text-color' : 'dark-text-color'} ms-1`}>
                                                {project.name}
                                            </span>
                                            <span className="text-neutral-400 ms-auto flex md:hidden">
                                                {project.dateYear}
                                            </span>
                                            <div className="gap-2 hidden md:flex">
                                                <div>&middot;</div>
                                                {
                                                    project.headerIcons.map((item, index) => (
                                                        <a key={index} href={item.link} className="text-2xl">
                                                            {item.icon}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <span className="text-neutral-400 ms-auto hidden md:flex">
                                            {project.dateYear}
                                        </span>
                                    </div>
                                    <div className="gap-2 flex md:hidden mx-auto">
                                        {
                                            project.headerIcons.map((item, index) => (
                                                <a key={index} href={item.link} className="text-2xl">
                                                    {item.icon}
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                                <p className="text-sm md:text-md text-center md:text-left">{project.description} <a href={`/project/${project.name}`} className={`${isDarkMode ? 'medium-text-color' : 'dark-text-color'} font-semibold`}>Learn More</a></p> 
                            </div>
                        </div>
                        <div className="flex items-start justify-center md:justify-start flex-wrap gap-3 mt-3 mb-3">
                            {
                                project.languages.map((language, index) => (
                                    <div key={index} className="transition text-xs md:text-base px-3 md:px-4 py-2 rounded-full extra-light-bg-color whitespace-nowrap dark-text-color">{language}</div>
                                ))
                            }
                        </div>
                        <hr />
                    </div>
                </div>
            )}
        </div>
    ))

    return (
        <div className="mb-14">
            <div className="font-bold mb-5 lg:ms-7 text-center lg:text-left text-sm md:text-base mt-14">My Work</div>
            <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full`}>
                <div className={`flex items-center justify-center md:justify-start gap-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold`}>
                    <PiCodeDuotone className="h-5 w-5" />
                    Projects
                </div>
                {projectsComponent}
                <Button className={`expand-hover ${isDarkMode ? 'light-bg-color' : 'medium-bg-color'} w-full lg:w-52 p-2 rounded-2xl shadow-lg mt-7 ms-auto ${isDarkMode ? 'dark-text-color' : 'text-white'}`}>
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