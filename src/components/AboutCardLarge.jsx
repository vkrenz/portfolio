import data from '../data'

import { useDarkMode } from '../DarkModeContext';

const AboutCardLarge = () => {
    const { isDarkMode } = useDarkMode()


    return (
        <div>
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
        </div>
    );
}
 
export default AboutCardLarge;