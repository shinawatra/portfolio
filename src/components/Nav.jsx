import {
  FaEnvelope,
  FaHome,
  FaUser,
  FaBriefcase,
  FaTools,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Nav({ setIsOpen }) {
  const [active, setActive] = useState(window.location.hash || 'home');

  useEffect(() => {
    const handleHashChange = () => setActive(window.location.hash || 'home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  function handleClick(link, e) {
    if (link.id === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActive('home'); // force Home to become active immediately using react-scroll
    } else {
      setActive(link.id);
    }
  }

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  const links = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'projects', label: 'Projects', icon: <FaBriefcase /> },
    { id: 'service', label: 'Services', icon: <FaTools /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="flex flex-col gap-4 text-white mt-10 px-7">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.id}
          smooth={true}
          spy={true}
          duration={100}
          offset={-70}
          onClick={() => {
            handleClick(link, event), handleNavClick();
          }}
          className={`flex lg:flex-row-reverse 2xl:flex-row items-center justify-between lg:justify-start lg:gap-5 2xl:gap-0 2xl:justify-between px-7 py-4 transition-all duration-300 -mx-7 cursor-pointer
        ${
          active === link.id
            ? 'bg-[#222] dark:bg-blue-500 text-white'
            : 'bg-transparent text-[#111] dark:text-[#9fb6b3]'
        }
      `}
        >
          <span
            className={`text-lg transition-colors ${
              active === link.id
                ? 'text-[#e27689] dark:text-yellow-300'
                : 'text-[#333] dark:text-[#94a3b8]'
            }`}
          >
            {link.icon}
          </span>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
