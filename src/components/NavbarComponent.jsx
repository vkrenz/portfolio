'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiMoonStarsDuotone } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'
import { Navbar } from 'flowbite-react';

import PropTypes from 'prop-types';

const NavbarComponent = ({
    options
}) => {
    function useRouter() {
        const location = useLocation();
      
        return {
          pathname: location.pathname,
          query: new URLSearchParams(location.search),
        };
    }

    const { pathname } = useRouter();

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
                ${pathname === `/${option}` ? 'font-semibold dark-text-color' : ''}
            `}
        >
            {option}
        </Link>
    ))

    return (
        <div className="flex gap-3 mb-14 mt-10">
            <Navbar className="bg-white p-3 rounded-2xl lg:rounded-full w-full flex justify-center" rounded>
                {/* <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand> */}
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
            <div className="expand-hover cursor-pointer h-auto w-1/3 md:w-28 bg-white rounded-2xl lg:rounded-full flex items-center justify-center text-2xl">
                <PiMoonStarsDuotone />
            </div>
        </div>
    );
}

NavbarComponent.propTypes = {
    options: PropTypes.node.isRequired,
  };
 
export default NavbarComponent;