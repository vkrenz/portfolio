import data from '../data'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Button } from 'flowbite-react';

import { BsArrowRight } from 'react-icons/bs'
import { LiaLinkSolid } from 'react-icons/lia'
import { PiMapPinLineDuotone } from 'react-icons/pi'

import { useDarkMode } from '../DarkModeContext';

const AboutCard = ({
    showPhotoSmallScreen = true,
}) => {
    const {
        name,
        description,
        photo,
        contact,
        socials,
    } = data

    const typedRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'a <span class="medium-text-color">Student</span>',
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
        })

        return () => typed.destroy()
    }, [name])

    const { isDarkMode } = useDarkMode()
    
    const splitSocials = (arr, size = 3) => {
        const split = []
        for (let i = 0; i < arr.length; i += size) {
            split.push(arr.slice(i, i + size))
        }
        return split
    }

    const newSocials = splitSocials(socials)

    return (
        <div>
            {
                showPhotoSmallScreen && (
                    <div className="block lg:hidden bg-neutral-600 w-full rounded-2xl mb-5"> 
                        <img src={photo} alt="Profile Picture" className="w-40 mx-auto rounded-2xl" />
                    </div>
                )
            }
            <div className="font-bold mb-5 lg:ms-7 text-center lg:text-left text-sm md:text-base">About Me</div>
            <div className="flex md:flex-row flex-col gap-7">
                <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full lg:w-1/2`}> {/** Left Column */}
                    <div className="flex h-full ">
                        <div className="w-full flex flex-col gap-7 text-center lg:text-left h-full justify-between items-center lg:items-start">
                            <div className={`${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold flex gap-3 items-center justify-center md:justify-start text-base`}>
                                    <PiMapPinLineDuotone className="w-5 h-5" />
                                    {contact.location}
                            </div>
                            <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg`}>
                                <div className="flex gap-2 justify-center md:justify-start">
                                    Hey, I&apos;m
                                    <span ref={typedRef}></span>
                                </div>
                                {/* {name.split(" ")[0]}! 👋 */}
                            </div>
                            <div className={`text-sm md:text-md ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>
                                <p
                                    dangerouslySetInnerHTML={{
                                    __html: description,
                                    }}
                                />
                            </div>
                            <Button href="/about" className={`expand-hover ${isDarkMode ? 'light-bg-color' : 'medium-bg-color'} uppercase ${isDarkMode ? 'dark-text-color' : 'text-white'} w-full lg:w-52 p-2 rounded-2xl shadow-lg transition`}>
                                <p>
                                    More About Me
                                </p>
                                <BsArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="w-1/3 hidden lg:block"> 
                            <img src={photo} alt="Profile Picture" className="w-40 ms-auto" />
                        </div>
                    </div>
                </div>
                <div className={`w-full lg:w-1/2 ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl flex flex-col gap-3`}> {/** Right Column */}
                    <div className={`flex items-center gap-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-400'} uppercase font-semibold mb-5 justify-center md:justify-start text-base`}>
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
            </div>
        </div>
    );
}
 
export default AboutCard;