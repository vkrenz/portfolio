'use client'

// React Imports
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// React-Icons Imports
import { PiMoonStarsDuotone, PiSunHorizonDuotone } from 'react-icons/pi'

// Dark Mode Import
import { useDarkMode } from '../DarkModeContext';

const NavbarComponent = () => {

    // Dark Mode State
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    // To-be changed (eventually)
    const showBlog = false
    const showResume = false // WIP (11/30/2024)
    const showContact = false

    // Active Hue State
    // Default: 190 (Cyan)
    const [activeHue, setActiveHue] = useState(190)

    function useRouter() {
        const location = useLocation();
      
        return {
          pathname: location.pathname,
          query: new URLSearchParams(location.search),
        };
    }

    const { pathname } = useRouter()

    // Navbar Options
    const options = [
        'Home',
        'About', 
        'Work', 
        // /resume, /blog, /contact are WIP (11/2024)
        ...(showResume ? ['Resume'] : []), 
        ...(showBlog ? ['Blog'] : []), 
        ...(showContact ? ['Contact'] : []),
    ];

    // All Possible Hue Options
    const hueOpts = [
        {
            hue: 190,
            bgColor: 'bg-sky-100'
        },
        {
            hue: 0,
            bgColor: 'bg-red-100'
        },
        {
            hue: 120,
            bgColor: 'bg-green-100'
        },
    ]

    // Renders all the @hueOpts
    const renderHues = hueOpts.map(opt => (
        <div
            key={opt.hue}
            className={`${
                activeHue === opt.hue
                    ? `animate-bounce-custom transition border-2 ${isDarkMode ? 'border-neutral-100' : 'border-neutral-400'} rounded-full w-5 h-5 flex items-center justify-center`
                    : ''
            }`}
        >
            <button
                onClick={() => handleHueChange(opt.hue)}
                className={`
                    ${activeHue === opt.hue ? 'w-3 h-3' : 'w-5 h-5 mt-[6px]'}
                    ${opt.bgColor}
                    transition
                    expand-hover
                    rounded-full
                    border-neutral-400
                    border
                `}
            />
        </div>
    ))

    const handleHueChange = (newHue) => {
        setActiveHue(newHue);
        // --global-hue is in :root @ ../../index.css
        document.documentElement.style.setProperty('--global-hue', newHue);
    };

    // Render all @options in the navbar
    const navOptions = options.map((option, index) => (
        <Link 
            to={`/${option.toLowerCase()}`} 
            key={index} 
            className={`
                capitalize 
                text-xs
                lg:text-sm
                font-normal
                rounded-full
                ${isDarkMode ? 'hover:bg-neutral-700' : 'hover:bg-neutral-100'}
                w-full
                text-center
                px-2
                py-2
                lg:px-5
                transition
                ${pathname === `/${option.toLowerCase()}` ? `font-semibold ${isDarkMode? 'dark-text-color bg-neutral-300 hover:bg-neutral-300' : 'dark-text-color light-bg-color'}` : ''}
            `}
        >
            {option}
        </Link>
    ))

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="flex gap-3 my-14 w-full max-h-[60px]">
                <div
                    className={`
                        ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} 
                        p-3 
                        rounded-full
                        w-full
                        flex 
                        justify-center
                    `} 
                >
                    <div className="w-full flex justify-between mx-[3px]">

                        {/* Render all @navOptions */}
                        <div className="w-full lg:w-1/2 flex justify-between lg:gap-3">
                            {navOptions}
                        </div>

                        {/* Render all @hueOpts */}
                        <div className="flex items-center gap-3 h-full">
                            <div className={`hidden lg:flex gap-3 items-center justify-center px-4 py-1 h-full rounded-full ${isDarkMode ? 'bg-neutral-700' : 'extra-light-bg-color'}`}>
                                {renderHues}
                            </div>
                            <div
                                className={`
                                    ${isDarkMode ? 'bg-neutral-700' : 'extra-light-bg-color'}
                                    transition
                                    expand-hover
                                    cursor-pointer
                                    rounded-full
                                    lg:rounded-full
                                    hidden
                                    lg:flex 
                                    items-center
                                    justify-center
                                    w-16
                                    h-full
                                    text-xl
                                `}
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ? <PiSunHorizonDuotone className="light-text-color" /> : <PiMoonStarsDuotone className="dark-text-color"/>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Small Screen - Hue Options */}
            <div className={`flex lg:hidden mb-14 ${isDarkMode ? 'bg-neutral-600' : ''} p-3 rounded-full mx-auto`}>
                <div className="flex items-center justify-center gap-3 h-[40px]">
                    <div className={`flex lg:hidden gap-3 items-center justify-center px-4 py-1 h-full rounded-full ${isDarkMode ? 'bg-neutral-700' : 'bg-white'}`}>
                        {renderHues}
                    </div>
                    <div
                        className={`
                            ${isDarkMode ? 'bg-neutral-700' : 'bg-white'}
                            transition
                            expand-hover
                            cursor-pointer
                            rounded-full
                            lg:rounded-full
                            flex 
                            lg:hidden
                            items-center
                            justify-center
                            w-[116px]
                            h-full
                            text-xl
                        `}
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? <PiSunHorizonDuotone className="light-text-color" /> : <PiMoonStarsDuotone className="dark-text-color"/>}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

// NavbarComponent.propTypes = {
//     isDarkMode: PropTypes.node.isRequired,
//     toggleDarkMode: PropTypes.node.isRequired,
//   };
 
export default NavbarComponent;