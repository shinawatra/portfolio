import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Services from './components/Services';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function updateNav() {
      if (window.innerWidth <= 800 && isOpen) {
        setIsOpen(false);
      } else if (window.innerWidth > 800 && !isOpen) {
        setIsOpen(true);
      }
    }

    window.addEventListener('resize', updateNav);

    return () => window.removeEventListener('resize', updateNav);
  }, [isOpen]);

  function menuOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="min-h-screen flex gap-0 lg:gap-64 2xl:gap-78 bg-white dark:bg-[#0f1720]">
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div>
        <Hero isOpen={isOpen} setIsOpen={setIsOpen} menuOpen={menuOpen} />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}

export default App;
