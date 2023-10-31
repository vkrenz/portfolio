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

    const { pathname } = useRouter();

    const options = [
        'home',
        'about', 
        'work', 
        'resume', 
        'blog', 
        'contact',
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
                    ? `animate-bounce-custom border-2 ${isDarkMode ? 'border-neutral-100' : 'border-neutral-400'} rounded-full w-6 h-6 flex items-center justify-center`
                    : ''
            }`}
        >
            <button
                onClick={() => handleHueChange(opt.hue)}
                className={`
                    ${activeHue === opt.hue ? 'w-4 h-4' : 'w-6 h-6'}
                    ${opt.bgColor}
                    expand-hover
                    rounded-full
                    border
                    ${isDarkMode ? 'border-neutral-100' : 'border-neutral-400'} 
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
            to={`/${option}`} 
            key={index} 
            className={`
                capitalize 
                text-base 
                ${pathname === `/${option}` ? `font-semibold ${isDarkMode? 'light-text-color' : 'dark-text-color'}` : ''}
            `}
        >
            {option}
        </Link>
    ))

    return (
        <div className="flex gap-3 mb-14 mt-10">
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
                <Navbar.Toggle className="me-auto"/>
                <Navbar.Collapse className="md:ms-4">
                    {navOptions}
                </Navbar.Collapse>
                <div className="flex gap-5 mx-auto sm:float-right mt-2 me-2 ms-2">
                    {renderHues}
                </div>
            </Navbar>
            <div 
                className={`
                    ${isDarkMode ? 'bg-neutral-600' : 'bg-white'}
                    expand-hover 
                    cursor-pointer 
                    h-auto w-1/3 
                    md:w-28 
                    rounded-2xl 
                    lg:rounded-full 
                    flex items-center 
                    justify-center 
                    text-2xl
                `}
                onClick={toggleDarkMode}
            >
                {isDarkMode ? <PiSunHorizonDuotone className="text-white" /> : <PiMoonStarsDuotone className="text-neutral-500"/>}
            </div>
        </div>
    );
}

// NavbarComponent.propTypes = {
//     isDarkMode: PropTypes.node.isRequired,
//     toggleDarkMode: PropTypes.node.isRequired,
//   };
 
export default NavbarComponent;