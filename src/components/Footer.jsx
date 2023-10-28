import { FaGithubAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="flex gap-3 mb-10 mt-8 dark-text-color">
            <div className="expand-hover cursor-pointer bg-white rounded-2xl lg:rounded-full flex items-center justify-center px-6">
                <div className="flex gap-3 items-center text-sm">
                    <FaGithubAlt className="w-5 h-5" /> 
                    <p>Code</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-2xl lg:rounded-full w-full">
                <div className="md:ms-4 text-sm">Made with ❤️ by Victor Krenzel</div>
            </div>
        </div>
    );
}
 
export default Footer;