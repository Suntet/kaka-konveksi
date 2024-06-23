import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import Footer from './components/footer';
import Popup from './components/Popup';

const App = () => {
  const [popupContent, setPopupContent] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleLinkClick = (content) => {
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupContent('');
  };

  return (
    <div className="App">
      <Navbar onLinkClick={handleLinkClick} />
      <Hero onLinkClick={handleLinkClick} />
      <ProductCategories />
      <Footer onLinkClick={handleLinkClick} />
      {isPopupVisible && <Popup content={popupContent} onClose={closePopup} />}
    </div>
  );
};

export default App;