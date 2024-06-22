import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 KAKA.</p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 mt-4 space-y-2 md:space-y-0">
          <a href="#" className="text-white">About  us</a>
          <a href="#" className="text-white">Terms of Service</a>
          <a href="#" className="text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
