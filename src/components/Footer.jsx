import { FaGithubAlt } from 'react-icons/fa'
import { PiHeartDuotone } from 'react-icons/pi'
import { FiArrowUpRight } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className="flex gap-3 mb-10 mt-8 dark-text-color">
            <div className="expand-hover cursor-pointer bg-white rounded-2xl lg:rounded-full md:flex hidden items-center justify-center px-6">
                <div className="flex gap-3 items-center text-xs lg:text-md">
                    <FaGithubAlt className="w-5 h-5" /> 
                    <p>Code</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full">
                <div className="bg-white p-5 rounded-2xl lg:rounded-full w-full flex flex-col md:flex-row md:justify-between">
                    <div className="md:ms-4 text-xs lg:text-sm flex gap-1 items-center justify-center md:justify-start">
                        <p>Made with</p> 
                        <PiHeartDuotone className="w-5 h-5 text-rose-300" />
                        <p>by Victor Krenzel</p>
                    </div>
                    <hr className="w-24 mx-auto my-3 md:hidden" />
                    <div className="text-xs lg:text-sm sm:ms-4 md:me-4 text-center md:text-left mt-1">
                        vkrenzel &copy; 2023
                    </div>
                </div>
                <div className="expand-hover cursor-pointer bg-white rounded-2xl lg:rounded-full flex md:hidden items-center justify-center p-6">
                    <div className="flex gap-3 items-center text-xs lg:text-md">
                        <FaGithubAlt className="w-5 h-5" /> 
                        <p>Source Code</p> 
                        <FiArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;