import PropTypes from 'prop-types';

import NavbarComponent from './NavbarComponent';
import Footer from './Footer';

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
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
