import { useEffect } from 'react'

import PropTypes from 'prop-types';
import NavbarComponent from './Navbar';
import Footer from './Footer';

import { useDarkMode } from '../DarkModeContext';

const Layout = ({ children }) => {

  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    console.info(`(Layout.jsx): Dark Mode: ${isDarkMode}`)
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [isDarkMode])

  return (
    <div className="container mx-auto px-4 lg:px-8 md:px-0 w-full lg:max-w-5xl">
      <NavbarComponent 
        // isDarkMode={isDarkMode} 
        // toggleDarkMode={toggleDarkMode} 
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
