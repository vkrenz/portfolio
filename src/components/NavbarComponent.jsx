'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiMoonStarsDuotone, PiSunHorizonDuotone } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'
import { Navbar } from 'flowbite-react';

import PropTypes from 'prop-types';

const NavbarComponent = ({
    isDarkMode,
    toggleDarkMode,
}) => {
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

    const [activeHue, setActiveHue] = useState(190); // State variable to store the active hue

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
            <Navbar className={`${isDarkMode ? 'bg-neutral-500' : 'bg-white'} p-3 rounded-2xl lg:rounded-full w-full flex justify-center`} rounded>
                <Navbar.Toggle className="me-auto"/>
                <Navbar.Collapse className="md:ms-4">
                    {navOptions}
                </Navbar.Collapse>
                <div className="flex gap-5 mx-auto sm:float-right mt-2 me-2 ms-2">
                    <div className={`${activeHue === 190 ? 'animate-bounce-custom border-2 border-neutral-400 rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>
                        <button 
                            className={`expand-hover bg-sky-100 ${activeHue === 190 ? 'w-4 h-4' : 'w-6 h-6'} rounded-full border border-neutral-400`}
                            onClick={() => handleHueChange(190)}
                        ></button>
                    </div>
                    <div className={`${activeHue === 0 ? 'animate-bounce-custom border-2 border-neutral-400 rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>
                        <button 
                            className={`expand-hover bg-red-100 ${activeHue === 0 ? 'w-4 h-4' : 'w-6 h-6'} rounded-full border border-neutral-400`}
                            onClick={() => handleHueChange(0)}
                        ></button>
                    </div>
                    <div className={`${activeHue === 120 ? 'animate-bounce-custom border-2 border-neutral-400 rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>
                        <button 
                            className={`expand-hover bg-green-100 ${activeHue === 120 ? 'w-4 h-4' : 'w-6 h-6'} rounded-full border border-neutral-400`}
                            onClick={() => handleHueChange(120)}
                        ></button>
                    </div>
                </div>
            </Navbar>
            <div 
                className={`expand-hover cursor-pointer h-auto w-1/3 md:w-28 ${isDarkMode ? 'bg-neutral-500' : 'bg-white'} rounded-2xl lg:rounded-full flex items-center justify-center text-2xl`}
                onClick={toggleDarkMode}
            >
                {isDarkMode ? <PiSunHorizonDuotone /> : <PiMoonStarsDuotone />}
            </div>
        </div>
    );
}

NavbarComponent.propTypes = {
    isDarkMode: PropTypes.node.isRequired,
    toggleDarkMode: PropTypes.node.isRequired,
  };
 
export default NavbarComponent;