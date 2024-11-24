/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// Import all data
import data from '../data'

// Import TypedJS (Typewritter Effect)
import Typed from "typed.js";

// React Imports
import { useEffect, useRef } from "react";

// React-Flowbite Imports
import { Button } from 'flowbite-react';

// React-Icons Imports
import { BsArrowRight } from 'react-icons/bs'
import { LiaLinkSolid } from 'react-icons/lia'
import { PiBankDuotone, PiDevicesDuotone} from 'react-icons/pi'

// Import Dark Mode
import { useDarkMode } from '../DarkModeContext';

// Import BaffleJS
import BaffleText from './BaffleText';

const AboutCard = ({
    small
}) => {

    // Deconstruct data
    const {
        name,
        description,
        photo,
        contact,
        socials,
        experience,
    } = data

    const typedRef = useRef(null)

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: [
                    'a <span class="medium-text-color">Banker</span>',
                    'a <span class="medium-text-color">Developer</span>',
                    `<span class="medium-text-color">${name.split(" ")[0]}</span> 👋`
                ],
                startDelay: 500,
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 100,
                showCursor: true,
                smartBackspace: true,
                onComplete: (self) => {
                    self.cursor.remove(); // Remove the cursor when typing is complete
                },
            });
    
            return () => typed.destroy();
        }
    }, [name]);    

    // Dark Mode State
    const { isDarkMode } = useDarkMode()
    
    // Return an array of socials
    const splitSocials = (arr, size = 3) => {
        const split = []
        for (let i = 0; i < arr.length; i += size) {
            split.push(arr.slice(i, i + size))
        }
        return split
    }

    // Store the array of split socials
    const newSocials = splitSocials(socials)

    return (

        <div>
            {
                small ? (
                    <>
                        {/* Small About Card */}
                        <div>
                            <div className="font-bold mb-5 lg:ms-7 text-center lg:text-left text-sm md:text-base">About Me</div>
                            <div className="flex md:flex-row flex-col gap-8">
                                <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full lg:w-1/2`}>
                                    <div className="flex h-full ">
                                        <div className="w-full flex flex-col gap-8 text-center lg:text-left h-full justify-between items-center lg:items-start">
                                            <div className={`${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold flex gap-3 items-center justify-center md:justify-start text-base`}>
                                                    
                                                    {/* Company Name */}
                                                    <div className="flex items-center gap-3">
                                                        <PiBankDuotone className="w-5 h-5" />
                                                        <BaffleText text={contact.company} />
                                                    </div>

                                                    &middot;

                                                    {/* Location */}
                                                    <div className="flex items-center gap-3 text-neutral-400">
                                                        {contact.location}
                                                    </div>

                                            </div>

                                            {/* Display Name (TypedJS) */}
                                            <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : ''} text-lg`}>
                                                <div className="flex gap-2 justify-center md:justify-start">
                                                    Hey, I&apos;m
                                                    <span ref={typedRef}></span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className={`text-sm md:text-md ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                    __html: description,
                                                    }}
                                                />
                                            </div>

                                            {/* Call To Action Button - Navigate to /about  */}
                                            <Button href="/about" className={`expand-hover ${isDarkMode ? 'light-bg-color' : 'medium-bg-color'} uppercase ${isDarkMode ? 'dark-text-color' : 'text-white'} w-full lg:w-52 lg:max-h-14 lg:h-14 p-2 rounded-2xl shadow-lg transition`}>
                                                <BaffleText text="More About Me" />
                                                <BsArrowRight className="ml-2 h-5 w-5" />
                                            </Button>

                                        </div>

                                        {/* Profile Image  */}
                                        <div className="w-1/3 hidden lg:block"> 
                                            <img src={photo} alt="Profile Picture" className="w-40 ms-auto" />
                                        </div>

                                    </div>
                                </div>

                                {/** Right Column */}
                                <div className={`w-full lg:w-1/2 ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl flex flex-col gap-3`}> 
                                    <div className={`flex items-center gap-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold mb-5 justify-center md:justify-start text-base`}>
                                        <LiaLinkSolid className="h-5 w-5" />
                                        Socials
                                    </div>

                                    {/* Display Socials */}
                                    <div className="flex flex-col gap-3 h-full md:justify-around w-full">
                                        {newSocials.map((chunk, index) => (
                                            <div key={index} className="flex gap-3 h-full w-full">
                                                {chunk.map((social, index) => (
                                                    <div key={index} className={`transition shadow-lg ${isDarkMode ? 'extra-light-bg-color' : 'dark-bg-color'} expand-hover transition cursor-pointer w-full h-full rounded-2xl flex items-center justify-center ${isDarkMode ? 'dark-text-color' : 'text-white'} text-5xl flex-col py-5 `}>
                                                        <a href={social.link} target="new" className="flex flex-col gap-3 justify-center items-center">
                                                            {social.icon}
                                                            <span className="text-xs">{social.handle}</span>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Large About Card */}
                        <div className="flex flex-col gap-8">
                            <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full`}>
                                <div className="flex h-full justify-center items-center gap-8 flex-col my-8">
                                    <img src={data.photo} alt="Profile Picture" className="w-60 medium-bg-color p-5 rounded-full" />
                                    <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg`}>
                                        Hey, I&apos;m <span className="medium-text-color">Victor</span> 👋
                                    </div>
                                    <div className={`text-center md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg`}>
                                        a <span className="medium-text-color underline-extra-light-color"> Software Developer</span> based in Toronto,
                                    </div>
                                    <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg text-center flex gap-2 flex-wrap items-center justify-center`}>
                                        Enthusiastic about delivering high-quality&nbsp;<span className="underline-medium-color"><BaffleText text="applications" /></span>.
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8 flex-col lg:flex-row">
                                <div className={`w-full lg:w-1/2 ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl flex flex-col gap-3`}> {/** Right Column */}
                                        <div className={`flex items-center gap-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold mb-5 justify-center lg:justify-start text-base`}>
                                            <LiaLinkSolid className="h-5 w-5" />
                                            Socials
                                        </div>
                                        <div className="flex flex-col gap-3 h-full md:justify-around w-full">
                                            {newSocials.map((chunk, index) => (
                                                <div key={index} className="flex gap-3 h-full w-full">
                                                    {chunk.map((social, index) => (
                                                        <div key={index} className={`transition shadow-lg ${isDarkMode ? 'extra-light-bg-color' : 'dark-bg-color'} expand-hover transition cursor-pointer w-full h-full rounded-2xl flex items-center justify-center ${isDarkMode ? 'dark-text-color' : 'text-white'} text-5xl flex-col py-5 `}>
                                                            <a href={social.link} target="new" className="flex flex-col gap-3 justify-center items-center">
                                                                {social.icon}
                                                                <span className="text-xs">{social.handle}</span>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`w-full lg:w-1/2 ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl flex flex-col gap-3`}> {/** Right Column */}
                                        <div className={`flex items-center gap-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold mb-5 justify-center lg:justify-start text-base`}>
                                            <PiDevicesDuotone className="h-5 w-5" />
                                            Experience
                                        </div>
                                        <div className="flex items-start justify-center lg:justify-start flex-wrap gap-3">
                                            {
                                                experience.map((exp, index) => (
                                                    <a key={index} href={exp.link}>
                                                        <div className="expand-hover transition text-xs sm:text-sm px-3 md:px-4 py-2 rounded-full bg-neutral-700 whitespace-nowrap light-text-color w-100">{exp.name}</div>
                                                    </a>
                                                ))
                                            }
                                            <a href="/work"><div className="expand-hover transition text-xs sm:text-sm px-3 md:px-4 py-2 rounded-full extra-light-bg-color whitespace-nowrap dark-text-color flex gap-3 leading-4">See more <BsArrowRight className="ml-1 h-4 w-4" /></div></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}
 
export default AboutCard;