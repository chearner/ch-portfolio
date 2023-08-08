import React, { useState } from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="scrollToTop">
      <FiArrowUpCircle
        fontSize="48"
        onClick={scrollToTop}
        className={visible ? 'show' : 'hidden' }
      />
    </div>
  );
};

export default ScrollToTop;
