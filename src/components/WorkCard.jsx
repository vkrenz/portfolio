/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import data from '../data'

import { Button } from 'flowbite-react';

import { BsArrowRight } from 'react-icons/bs'
import { PiCodeDuotone } from 'react-icons/pi'
import { FiGithub } from 'react-icons/fi'
import { BiLinkExternal } from "react-icons/bi";

import { useDarkMode } from '../DarkModeContext';
import BaffleText from './BaffleText';

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

                            {/* Project Icon @ Large Screen */}
                            <div className={`transition rounded-2xl w-0 lg:w-28 lg:h-24 hidden lg:flex items-center justify-center ${isDarkMode ? 'extra-light-bg-color' : 'dark-bg-color'} shadow-lg`}>
                                <div key={index} className={`text-5xl ${isDarkMode ? 'dark-text-color' : 'text-white'}`}>{project.imageIcon}</div>
                            </div>

                            <div className="w-full flex flex-col gap-3 lg:max-h-24 justify-around">
                                <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
                                    <div className="flex w-full">
                                        <div className="font-semibold text-md flex gap-3 items-center w-full">
                                            <div className="flex items-center w-full md:w-auto">
                                                <div className="flex items-center gap-1">

                                                    {/* Project Icon @ Small Screen */}
                                                    <span className="flex lg:hidden text-2xl">
                                                        {project.imageIcon}
                                                    </span>

                                                    {/* Project Name */}
                                                    <span className={`${isDarkMode ? 'light-text-color' : 'dark-text-color'} ms-1`}>
                                                        <BaffleText text={project.name} />
                                                    </span>

                                                </div>

                                                {/* Project Year @ Small Screen */}
                                                <span className="text-neutral-400 ms-auto flex md:hidden">
                                                    {project.dateYear}
                                                </span>

                                            </div>

                                            {/* External Project Links @ Large Screen*/}
                                            <div className="gap-2 hidden md:flex items-center">
                                                <div>&middot;</div>
                                                <div className="gap-2 flex items-center">
                                                    <a href={project.githubLink}>Github Repo</a>
                                                    <FiGithub className="text-xl"/>
                                                </div>
                                                {
                                                    project.link && (
                                                        <>
                                                            <div>&middot;</div>
                                                            <div className="gap-2 flex items-center">
                                                                <a href={project.link}>Live Demo</a>
                                                                <BiLinkExternal className="text-xl"/>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </div>

                                        </div>

                                        {/* Project Year @ Large Screen */}
                                        <span className="text-neutral-400 ms-auto hidden md:flex">
                                            {project.dateYear}
                                        </span>

                                    </div>

                                    {/* External Project Links @ Small Screen*/}
                                    <div className="gap-2 flex md:hidden lg:mx-auto">
                                        <div className="gap-2 flex items-center text-sm">
                                            <a href={project.githubLink}>Github Repo</a>
                                            <FiGithub className="text-xl"/>
                                        </div>
                                        {
                                            project.link && (
                                                <>
                                                    <div>&middot;</div>
                                                    <div className="gap-2 flex items-center text-sm">
                                                        <a href={project.link}>Live Demo</a>
                                                        <BiLinkExternal className="text-xl"/>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>

                                </div>

                                {/* Project Description */}
                                <p className="text-sm md:text-md">{project.description} <a href={`/project/${project.name}`} className={`${isDarkMode ? 'medium-text-color' : 'dark-text-color'} font-semibold`}>Learn More</a></p> 
                            
                            </div>
                        </div>

                        {/* Project Languages */}
                        <div className="flex items-start flex-wrap gap-3 my-2">
                            {
                                project.languages.map((language, index) => (
                                    <a key={index} href={language.link}>
                                        <div className={`expand-hover transition text-xs sm:text-sm px-3 md:px-4 py-2 rounded-full ${isDarkMode ? 'light-bg-color' : 'medium-bg-color'} whitespace-nowrap ${isDarkMode ? 'dark-text-color' : 'text-white'}`}>{language.name}</div>
                                    </a>
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
        <div>
            <div className="font-bold mb-5 lg:ms-7 text-center lg:text-left text-sm md:text-base mt-14">My Work</div>
            <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full`}>
                <div className={`flex items-center justify-center md:justify-start gap-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold mb-8`}>
                    <PiCodeDuotone className="h-5 w-5" />
                    Projects
                </div>
                {projectsComponent}
                <Button href="/work" className={`expand-hover ${isDarkMode ? 'light-bg-color' : 'medium-bg-color'} uppercase w-full lg:w-52 p-2 rounded-2xl shadow-lg mt-7 ms-auto ${isDarkMode ? 'dark-text-color' : 'text-white'}`}>
                    <BaffleText text="View All" />
                    <BsArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div> 
        </div>
    );
}
 
export default WorkCard;