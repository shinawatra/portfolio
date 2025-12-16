import { FiMenu } from 'react-icons/fi';
import { Element, Link } from 'react-scroll';
import IntroText from './IntroText';

function Hero({ menuOpen }) {
  return (
    <Element name="home">
      <section className="bg-[url('banner.jpg')] bg-cover bg-center h-[9%] md:h-64 p-10 md:px-10 md:py-70 xl:p-70 w-full grid place-content-center">
        <button
          onClick={menuOpen}
          className="fixed right-4 top-4 z-40 bg-[#80889077] py-2 px-[15px] rounded-sm cursor-pointer block lg:hidden transform transition-transform duration-800 ease-in-out backdrop-blur-md  border border-white/10"
        >
          <FiMenu className="size-6 text-white" />
        </button>
        <IntroText />

        <aside className="my-10">
          <p className="text-center text-[#ddd] mb-4">
            A Result-Oriented Web Developer building and managing Websites and
            Web
          </p>
          <p className="text-center text-[#ddd]">
            Applications that leads to the success of the overall product
          </p>
        </aside>
        <Link
          className="bg-[#2563EB] dark:bg-linear-to-br dark:from-[#60a5fa] dark:to-[#3b82f6] shadow-lg shadow-blue-500/30 hover:from-[#93c5fd] hover:to-[#60a5fa] hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 text-center w-[200px] p-4 text-lg md:text-2xl rounded text-white uppercase font-semibold hover:opacity-80 cursor-pointer m-auto"
          to="projects"
        >
          Projects
        </Link>
      </section>
    </Element>
  );
}

export default Hero;
