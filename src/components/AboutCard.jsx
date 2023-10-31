import data from '../data'

import { Button } from 'flowbite-react';

import { BsArrowRight } from 'react-icons/bs'
import { LiaLinkSolid } from 'react-icons/lia'
import { PiMapPinLineDuotone } from 'react-icons/pi'

import { useDarkMode } from '../DarkModeContext';

const AboutCard = (
        // {
        //     isDarkMode
        // }
) => {
    const {
        name,
        description,
        photo,
        contact,
        socials,
    } = data

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
            <div className="font-bold mb-5 lg:ms-7 text-center lg:text-left text-sm md:text-base">About Me</div>
            <div className="flex md:flex-row flex-col gap-7">
                <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full lg:w-1/2`}> {/** Left Column */}
                    <div className="flex h-full ">
                        <div className="w-full flex flex-col gap-7 text-center lg:text-left h-full justify-between">
                            <div className="text-neutral-400 uppercase font-semibold flex gap-3 items-center justify-center md:justify-start text-base">
                                    <PiMapPinLineDuotone className="w-5 h-5" />
                                    {contact.location}
                            </div>
                            <div className="md:text-2xl font-bold dark-text-color text-lg">
                                Hey, I&apos;m {name.split(" ")[0]}! 👋
                            </div>
                            <div className="text-sm md:text-md text-neutral-800">
                                <p
                                    dangerouslySetInnerHTML={{
                                    __html: description,
                                    }}
                                />
                            </div>
                            <Button className="expand-hover dark-bg-color w-full lg:w-52 p-2 rounded-2xl shadow-lg">
                                <p className="uppercase">
                                    More About Me
                                </p>
                                <BsArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="w-0 lg:w-1/4 invisible lg:visible"> 
                            <img src={photo} alt="Profile Picture" className="w-40 ms-auto rounded-2xl" />
                        </div>
                    </div>
                </div>
                <div className={`w-full lg:w-1/2 ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl flex flex-col gap-3`}> {/** Right Column */}
                    <div className="flex items-center gap-2 text-neutral-400 uppercase font-semibold mb-5 justify-center md:justify-start text-base">
                        <LiaLinkSolid className="h-5 w-5" />
                        Socials
                    </div>
                    <div className="flex flex-col gap-3 h-full md:justify-around w-full">
                        {newSocials.map((chunk, index) => (
                            <div key={index} className="flex gap-3 h-full w-full">
                                {chunk.map((social, index) => (
                                    <div key={index} className="shadow-lg dark-bg-color expand-hover transition cursor-pointer w-full h-full rounded-3xl flex items-center justify-center text-white text-5xl flex-col py-5">
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