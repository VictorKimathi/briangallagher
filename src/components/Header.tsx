import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Testimonials',
    path: '/testimonials'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Brian Gallagher
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-base font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-[#F79D0C]' : 'text-gray-700 hover:text-[#F79D0C]'}`}>
              {link.name}
            </Link>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 hover:text-[#F79D0C] transition-colors duration-200" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white px-4 py-5 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-base font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-[#F79D0C]' : 'text-gray-700 hover:text-[#F79D0C]'}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>)}
          </nav>
        </div>}
    </header>;
};
export default Header;