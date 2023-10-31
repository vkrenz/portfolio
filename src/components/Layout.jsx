import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';

const Layout = ({ children }) => {

  const [isDarkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode === 'true') setDarkMode(true) 
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode)
  }


  return (
    <div className="container mx-auto px-8 w-full lg:max-w-5xl">
      <NavbarComponent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
