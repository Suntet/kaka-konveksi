import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#f8e1b6] py-16 text-center text-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold">We make it by heart</h1>
        <p className="text-base md:text-lg mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget interdum arcu, id laoreet quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas in molestie lectus. Sed sit amet pulvinar augue. Morbi mattis dictum quam, at mattis velit interdum eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit amet viverra nisl.
        </p>
        <a href="#" className="inline-block mt-8 px-6 py-3 bg-black text-white font-bold rounded">Find More</a>
      </div>
    </section>
  );
};

export default Hero;