import React from 'react';
import menu from '../assets/menu.png'
import location from '../assets/location.png'

const Navbar = ({ onLinkClick }) => {
  return (
    <header className="bg-white p-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">KAKA</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" onClick={() => onLinkClick(
            <a href='https://maps.app.goo.gl/yJQwHZtveVCneTQr9'><img src={location} className='w-19 h-9 md:w-7 md:h-7 object-cover mx-auto active:rotate-180'/></a>
            )} className="font-bold text-black"><img src={menu} className=' w-4 h-4 md:w-3 md:h-3 object-cover mx-auto active:rotate-90'/></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
