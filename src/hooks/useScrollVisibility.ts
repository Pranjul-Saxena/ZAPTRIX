import { useState, useEffect } from 'react';

const useScrollVisibility = (threshold = 100) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const position = aboutSection.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight - threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
};

export default useScrollVisibility; 