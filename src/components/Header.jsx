import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Nav from './Nav';
import ThemeButton from './ThemeButton';

function Header({ isOpen, setIsOpen }) {
  return (
    <header
      className={`bg-[#F5F5F5] border-r border-slate-300 dark:border-0 dark:bg-[#1e293b] w-[79%] md:w-[45%] lg:w-[25%] xl:w-1/5 h-screen py-7 flex flex-col justify-between fixed top-0 left-0 z-10 transform transition-transform duration-800 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <section>
        <ThemeButton />

        <aside className="flex lg:flex-col 2xl:flex-row items-center lg:items-end 2xl:items-center justify-between px-7 mt-10">
          <img
            src="avatars.png"
            alt="Photo"
            className="rounded-full size-16 border-4 border-slate-200 dark:border-slate-700"
          />

          <div className="mt-0 lg:mt-4 2xl:mt-0">
            <h1 className="text-[#1A1A1A] dark:text-[#cffffa] text-xl">
              Adeshina Adegbite
            </h1>
            <p className="text-[#1A1A1A] dark:text-[#cffffa] text-sm mt-1 lg:text-right 2xl:text-left">
              Frontend Developer
            </p>
          </div>
        </aside>

        <Nav setIsOpen={setIsOpen} />
      </section>

      <aside className="flex justify-center gap-6">
        <a href="https://x.com/Shinawatra99" target="_blank">
          <FaXTwitter className="text-gray-900 dark:text-[#9fb6b3] hover:text-blue-600 dark:hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/adeshina-adegbite-207a0b8b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA59hhgTvR26O7sLLD7p18Q%3D%3D"
          target="_blank"
        >
          <FaLinkedin className="text-gray-900 dark:text-[#9fb6b3] hover:text-blue-600 dark:hover:text-white" />
        </a>
        <a href="#">
          <FaDiscord className="text-gray-900 dark:text-[#9fb6b3] hover:text-blue-600 dark:hover:text-white" />
        </a>
        <a href="https://github.com/shinawatra" target="_blank">
          <FaGithub className="text-gray-900 dark:text-[#9fb6b3] hover:text-blue-600 dark:hover:text-white" />
        </a>
        <a href="mailto:adegbite.contact@email.com" target="_blank">
          <FaEnvelope className="text-gray-900 dark:text-[#9fb6b3] hover:text-blue-600 dark:hover:text-white" />
        </a>
      </aside>
    </header>
  );
}

export default Header;
