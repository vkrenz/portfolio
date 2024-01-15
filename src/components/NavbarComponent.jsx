'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiMoonStarsDuotone, PiSunHorizonDuotone } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'
import { Navbar } from 'flowbite-react';

import { useDarkMode } from '../DarkModeContext';

const NavbarComponent = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    console.info(`(NavbarComponent.jsx): Dark Mode: ${isDarkMode}`)

    const [activeHue, setActiveHue] = useState(190); // State variable to store the active hue

    function useRouter() {
        const location = useLocation();
      
        return {
          pathname: location.pathname,
          query: new URLSearchParams(location.search),
        };
    }

    const { pathname } = useRouter()

    const options = [
        'Home',
        'About', 
        'Work', 
        'Resume', 
        'Blog', 
        'Contact',
    ];

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

    const renderHues = hueOpts.map(opt => (
        <div
            key={opt.hue}
            className={`${
                activeHue === opt.hue
                    ? `animate-bounce-custom transition border-2 ${isDarkMode ? 'border-neutral-100' : 'border-neutral-400'} rounded-full w-6 h-6 flex items-center justify-center`
                    : ''
            }`}
        >
            <button
                onClick={() => handleHueChange(opt.hue)}
                className={`
                    ${activeHue === opt.hue ? 'w-4 h-4' : 'w-6 h-6 mt-[6px]'}
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
        setActiveHue(newHue); // Set the active hue
        document.documentElement.style.setProperty('--global-hue', newHue);
    };

    const navOptions = options.map((option, index) => (
        <Link 
            to={`/${option.toLowerCase()}`} 
            key={index} 
            className={`
                capitalize 
                text-base 
                ${pathname === `/${option.toLowerCase()}` ? `font-semibold ${isDarkMode? 'medium-text-color' : 'dark-text-color'}` : ''}
            `}
        >
            {option}
        </Link>
    ))

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="flex gap-3 my-14 w-full">
                <Navbar 
                    className={`
                        ${isDarkMode ? 'bg-neutral-600' : 'bg-white'} 
                        p-3 
                        rounded-2xl 
                        lg:rounded-full 
                        w-full 
                        flex 
                        justify-center
                    `} 
                rounded>
                    <div className="md:ms-4 w-1/2 flex justify-around">
                        {navOptions}
                    </div>
                    <div className="flex items-center gap-3 h-full">
                        <div className={`hidden lg:flex gap-3 items-center justify-center px-4 py-1 h-full rounded-full ${isDarkMode ? 'bg-neutral-700' : 'bg-white'}`}>
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
                                flex items-center
                                justify-center
                                w-[45px]
                                h-full
                                text-2xl
                            `}
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? <PiSunHorizonDuotone className="light-text-color" /> : <PiMoonStarsDuotone className="dark-text-color"/>}
                        </div>
                    </div>
                </Navbar>
            </div>
            <div className="flex lg:hidden gap-5 mx-auto mb-7">
                {renderHues}
            </div>

        </div>
    );
}

// NavbarComponent.propTypes = {
//     isDarkMode: PropTypes.node.isRequired,
//     toggleDarkMode: PropTypes.node.isRequired,
//   };
 
export default NavbarComponent;