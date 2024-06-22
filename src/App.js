import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductCategories />
      <Footer />
    </div>
  );
}

export default App;
