import data from '../data'

import { LiaLinkSolid } from 'react-icons/lia'

import { useDarkMode } from '../DarkModeContext';

const AboutCardLarge = () => {
    const { socials } = data
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
        <div className="flex flex-col gap-14">
            <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-7 rounded-3xl w-full`}>
                <div className="flex h-full justify-center items-center gap-8 flex-col my-8">
                    <img src={data.photo} alt="Profile Picture" className="w-60 bg-neutral-500 p-5 rounded-full" />
                    <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg`}>
                        Hey, I&apos;m <span className="medium-text-color">Victor</span> 👋
                    </div>
                    <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg`}>
                        Enthusiastic about delivering high-quality <span className="underline-medium-color">applications</span>.
                    </div>
                    <div className={`md:text-2xl font-bold ${isDarkMode ? 'light-text-color' : 'dark-text-color'} text-lg`}>
                        a <span className="medium-text-color underline-extra-light-color">Software Developer</span> based in Toronto
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
    );
}
 
export default AboutCardLarge;