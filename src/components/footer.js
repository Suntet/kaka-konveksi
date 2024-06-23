// import React from 'react';

// const Footer = () => {
//   return (
    // <footer className="bg-gray-800 text-white py-6 mt-8">
    //   <div className="container mx-auto text-center">
    //     <p>&copy; 2024 KAKA.</p>
//         <div className="flex flex-row md:flex-row justify-center space-x-4 p-4">
//           <a href="#" className="text-white">About  us</a>
//           <a href="#" className="text-white">Terms of Service</a>
//           <a href="#" className="text-white">Contact Us</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = ({ onLinkClick }) => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8 inset-x-0 bottom-0">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 KAKA.</p>
        <div className="flex flex-row md:flex-row justify-center space-x-4 p-4">
          <a href="#" onClick={() => onLinkClick('Privacy Policy Content')} className="text-white">Privacy Policy</a>
          <a href="#" onClick={() => onLinkClick('Terms of Service Content')} className="text-white">Terms of Service</a>
          <a href="#" onClick={() => onLinkClick('Contact Us Content')} className="text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
