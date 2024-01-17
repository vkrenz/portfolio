import { FaGithubAlt } from 'react-icons/fa'
import { PiHeartDuotone } from 'react-icons/pi'
import { FiArrowUpRight } from 'react-icons/fi'

import { useDarkMode } from '../DarkModeContext'
import BaffleText from './BaffleText'

const Footer = () => {
    const { isDarkMode } = useDarkMode()

    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-3 my-14 dark-text-color max-h-[60px]">
                <div
                    className={`
                        ${isDarkMode ? 'bg-neutral-600' : 'bg-white'}
                        expand-hover
                        cursor-pointer
                        rounded-2xl
                        lg:rounded-full
                        md:flex
                        hidden
                        items-center
                        justify-center
                        px-6
                        w-1/5
                    `}
                >
                    <a
                        href="https://github.com/vkrenz/portfolio-2"
                        className={`
                            ${isDarkMode ? 'text-white' : 'dark-text-color'}
                            flex
                            gap-3
                            items-center
                            text-xs
                            lg:text-md
                        `}
                    >
                        <FaGithubAlt className="w-5 h-5" />
                        <BaffleText text="Source Code"/>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row gap-3 w-full">
                    <div className={`${isDarkMode ? 'bg-neutral-600' : 'bg-white'} p-5 rounded-2xl lg:rounded-full w-full flex flex-col md:flex-row md:justify-between`}>
                        <div className={`${isDarkMode ? 'light-text-color' : 'dark-text-color'} md:ms-4 text-xs lg:text-sm flex gap-1 items-center justify-center md:justify-start`}>
                            <p>Made with</p>
                            <PiHeartDuotone className="w-5 h-5 text-rose-300" />
                            <p>by Victor Krenzel</p>
                        </div>
                        <hr className={`w-24 mx-auto my-3 md:hidden ${isDarkMode ? 'light-text-color' : 'dark-text-color'}`} />
                        <div className={`text-xs lg:text-sm text-center md:text-left ${isDarkMode ? 'light-text-color' : 'dark-text-color'}`}>
                            vkrenzel &copy; 2023-2024
                        </div>
                    </div>
                    <div
                        className={`
                            ${isDarkMode ? 'bg-neutral-600' : 'bg-white'}
                            expand-hover
                            cursor-pointer
                            rounded-2xl
                            lg:rounded-full
                            flex
                            md:hidden
                            items-center
                            justify-center
                            p-6
                        `}
                    >
                        <a
                            href="https://github.com/vkrenz/portfolio-2"
                            className={`
                                ${isDarkMode ? 'text-white' : 'dark-text-color'}
                                flex
                                gap-3
                                items-center
                                text-xs
                                lg:text-md
                            `}
                        >
                            <FaGithubAlt className="w-5 h-5" />
                                <p>Source Code</p>
                            <FiArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;