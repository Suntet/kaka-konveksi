import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white p-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">KAKA</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="font-bold text-black">For Woman</a></li>
            <li><a href="#" className="font-bold text-black">For Man</a></li>
            <li><a href="#" className="font-bold text-black">Location</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
