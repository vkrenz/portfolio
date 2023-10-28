import PropTypes from 'prop-types';

import NavbarComponent from './NavbarComponent';

const Layout = ({ children }) => {

  const navOptions = [
      'home',
      'about', 
      'work', 
      'resume', 
      'blog', 
      'contact',
    ];

  return (
    <div className="container mx-auto px-8 w-full lg:max-w-5xl">
      <NavbarComponent options={navOptions} />
      {/* Add more buttons for different hue values as needed */}
      {/* Main content area */}
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
