import { FaGithubAlt } from 'react-icons/fa'
import { PiHeartDuotone } from 'react-icons/pi'

const Footer = () => {
    return (
        <div className="flex gap-3 mb-10 mt-8 dark-text-color">
            <div className="expand-hover cursor-pointer bg-white rounded-2xl lg:rounded-full flex items-center justify-center px-6">
                <div className="flex gap-3 items-center text-sm">
                    <FaGithubAlt className="w-5 h-5" /> 
                    <p>Code</p>
                </div>
            </div>
            <div className=" bg-white p-5 rounded-2xl lg:rounded-full w-full flex justify-between">
                <div className="md:ms-4 text-sm flex gap-3">
                    <p>Made with</p> 
                    <PiHeartDuotone className="w-5 h-5" />
                    <p>by Victor Krenzel</p>
                </div>
                <div className="md:text-sm me-4">
                    vkrenzel &copy; 2023
                </div>
            </div>
        </div>
    );
}
 
export default Footer;