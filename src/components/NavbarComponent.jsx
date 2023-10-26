'use client'

import PropTypes from 'prop-types';
import { Navbar } from 'flowbite-react';
import { useLocation } from 'react-router-dom'
import { PiLightbulbFilamentDuotone } from 'react-icons/pi'

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


    const navOptions = options.map((option, index) => (
        <Navbar.Link 
            key={index} 
            href={`/${option}`} 
            className={`
                capitalize
                text-base
                ${pathname === `/${option}` ? 'font-bold' : ''}
        `}
        >
                    {option}
        </Navbar.Link>
    ))

    return (
        <div className="flex justify-center-center gap-3 mb-[100px] mt-10">
            <Navbar class="bg-white p-3 rounded-2xl lg:rounded-full w-full" rounded>
                {/* <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand> */}
                <Navbar.Toggle className="me-auto"/>
                <Navbar.Collapse className="md:ms-4">
                    {navOptions}
                </Navbar.Collapse>
            </Navbar>
            <div className="h-16 md:h-12 w-24 bg-white rounded-2xl lg:rounded-full flex items-center justify-center text-2xl">
                <PiLightbulbFilamentDuotone />
            </div>
        </div>
    );
}

NavbarComponent.propTypes = {
    options: PropTypes.node.isRequired,
  };
 
export default NavbarComponent;