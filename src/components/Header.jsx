import React from 'react';
import logoSvg from '../assets/logo.svg'; // Ensure the path to your logo is correct

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logoSvg} alt="Vyapar Logo" className="h-8 w-auto" /> {/* SVG Logo */}
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg mx-10">
        {['Home', 'Pricing', 'About Us', 'Desktop', 'Career', 'Partner with us', 'Login'].map((item) => (
          <li key={item} className="hover:text-gray-600 cursor-pointer">{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
