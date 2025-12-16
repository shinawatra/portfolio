import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="
          group fixed bottom-6 right-6
          flex items-center justify-center
          size-[50px]
          bg-[#1e293b] text-white
          rounded-full
          overflow-hidden
          transition-all duration-300 ease-in-out
          hover:w-[140px] hover:rounded-[50px] hover:bg-linear-to-br hover:from-[#60a5fa] hover:to-[#3b82f6] cursor-pointer
        "
      >
        {/* Arrow Icon */}
        <FaArrowUp
          className="
            text-lg transition-opacity duration-300
            group-hover:opacity-0
          "
        />

        {/* Back to Top Text */}
        <span
          className="
            absolute opacity-0 text-sm font-medium transition-opacity duration-300
            group-hover:opacity-100
          "
        >
          Back to top
        </span>
      </button>
    )
  );
}

export default BackToTopButton;
