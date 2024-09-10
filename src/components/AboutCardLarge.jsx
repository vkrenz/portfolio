/* eslint-disable no-unused-vars */
import data from '../data'

import { LiaLinkSolid } from 'react-icons/lia'
import { PiDevicesDuotone } from 'react-icons/pi'
import { BsArrowRight } from 'react-icons/bs'

import { useDarkMode } from '../DarkModeContext';

import BaffleText from './BaffleText';

const AboutCardLarge = () => {
    const { socials, experience } = data
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
                    <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg text-center flex gap-2`}>
                        Enthusiastic about delivering high-quality <span className="underline-medium-color"><BaffleText text="applications" /></span>.
                    </div>
                </div>
            </div>
            <div className="flex gap-8">
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
    );
}
 
export default AboutCardLarge;