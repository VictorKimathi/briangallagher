import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brian Gallagher</h3>
            <p className="text-gray-300 mb-4">
              Freelance writer specializing in outdoor adventure, homesteading,
              and eco-conscious living.
            </p>
            <p className="text-gray-300">
              Based in Petaluma, California
              <br />
              Working remotely with flexible hours
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#F79D0C] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#F79D0C] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-[#F79D0C] transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-[#F79D0C] transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#F79D0C] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-2">
              Ready to collaborate on your next project?
            </p>
            <a href="mailto:gallagherb597@gmail.com" className="text-[#F79D0C] hover:underline">
              gallagherb597@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Brian Gallagher. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;