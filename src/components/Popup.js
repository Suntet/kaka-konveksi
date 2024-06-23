// import React from 'react';

// const Popup = ({ content, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3 relative">
//         <button onClick={onClose} className="absolute top-2 right-2 text-black text-2xl">&times;</button>
//         <div>{content}</div>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import React from 'react';

const Popup = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black text-2xl">&times;</button>
        <div className="p-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
