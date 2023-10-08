// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed items-center justify-center bottom-4 w-10 h-10 bg-coral-red right-4 rounded-full transition-ease-in-out duration-700 z-20 ${showButton ? 'flex' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <span className="material-symbols-sharp text-white">
        expand_less
      </span>
    </button>
  );
};

export default BackToTopButton;