import React from 'react';
import shirt from '../assets/shirt.jpeg';
import bag from '../assets/bag.jpeg';
import outer from '../assets/outer.jpeg';

const ProductCategories = () => {
  return (
    <section className="text-center py-8">
      <h2 className="text-2xl font-bold mb-8">PRODUCT CATEGORIES</h2>
      <div className="flex flex-wrap justify-center gap-8">
      <button h>
          <div className="text-center border-2 rounded-lg">
            <a href='#' className="mt-4 "><img src={shirt} alt="outer"  className=" rounded-t-md w-24 h-24 md:w-32 md:h-32 object-cover mx-auto" /></a>
            {/* <p className="mt-4">Outer</p> */}
            <a href='#' className="mt-4 ">shirt</a>
          </div>
        </button>
        <button h>
          <div className="text-center border-2 rounded-lg">
            <a href='#' className="mt-4 "><img src={bag} alt="outer"  className=" rounded-t-md w-24 h-24 md:w-32 md:h-32 object-cover mx-auto" /></a>
            {/* <p className="mt-4">Outer</p> */}
            <a href='#' className="mt-4 ">bag</a>
          </div>
        </button>
        <button h>
          <div className="text-center border-2 rounded-lg">
            <a href='#' className="mt-4 "><img src={outer} alt="outer"  className=" rounded-t-md w-24 h-24 md:w-32 md:h-32 object-cover mx-auto" /></a>
            {/* <p className="mt-4">Outer</p> */}
            <a href='#' className="mt-4 ">Outer</a>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ProductCategories;

// const ProductCategories = () => {
//   return (
//     <section className="text-center py-8">
//       <h2 className="text-2xl font-bold mb-8">PRODUCT CATEGORIES</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         <div className="text-center">
//           <img src={shirt} alt="shirt" className="w-24 h-24 md:w-32 md:h-32 object-cover mx-auto" />
//           <p className="mt-4">shirt</p>
//         </div>
//         <div className="text-center">
//           <img src={bag} alt="bag" className="w-24 h-24 md:w-32 md:h-32 object-cover mx-auto" />
//           <p className="mt-4">Bag</p>
//         </div>
//         <div className="text-center">
//           <img src={outer} alt="outer" className="w-24 h-24 md:w-32 md:h-32 object-cover mx-auto" />
//           <p className="mt-4">Outer</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductCategories;
