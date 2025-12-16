import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div>
      <BackToTopButton />
      <footer className="bg-[#f8faff] dark:bg-[rgb(15,23,32)] border-t border-[#dee2e6] dark:border-[#334155] text-gray-400 py-10 px-5 md:px-6 xl:px-20 mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-[#1a1a1a] dark:text-white text-xl text-center md:text-left font-semibold mb-2">
              Adeshina Adegbite
            </h2>
            <p className="text-sm text-center md:text-left text-[#1a1a1a] dark:text-gray-500">
              Frontend Developer crafting clean and responsive user interfaces.
            </p>
          </div>

          <div>
            <h3 className="text-[#1a1a1a] dark:text-white font-medium mb-2 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li className="text-center md:text-left">
                <Link
                  to="home"
                  className="text-[#1a1a1a] dark:text-gray-500 hover:text-[#0b5ed7] dark:hover:text-white cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  to="projects"
                  className="text-[#1a1a1a] dark:text-gray-500 hover:text-[#0b5ed7] dark:hover:text-white cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  to="about"
                  className="text-[#1a1a1a] dark:text-gray-500 hover:text-[#0b5ed7] dark:hover:text-white cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link
                  to="contact"
                  className="text-[#1a1a1a] dark:text-gray-500 hover:text-[#0b5ed7] dark:hover:text-white cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#1a1a1a] dark:text-white font-medium mb-2 text-center md:text-left">
              Connect
            </h3>
            <div className="flex space-x-4 text-lg justify-center md:justify-start">
              <a
                href="https://github.com/shinawatra"
                className="text-[#495057] dark:text-gray-500 hover:text-blue-600 dark:hover:text-white"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/adeshina-adegbite-207a0b8b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA59hhgTvR26O7sLLD7p18Q%3D%3D"
                className="text-[#495057] dark:text-gray-500 hover:text-blue-600 dark:hover:text-white"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/Shinawatra99"
                className="text-[#495057] dark:text-gray-500 hover:text-blue-600 dark:hover:text-white"
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </div>
            <p className="mt-3 text-xs lg:text-sm text-center md:text-left text-[#495057] dark:text-gray-500">
              📧 adegbite.contact@gmail.com
            </p>
          </div>
        </div>

        <div className="text-center text-[#1a1a1a] dark:text-gray-500 text-sm mt-8 border-t border-[#dee2e6] pt-4">
          © Copyright {new Date().getFullYear()}. Designed & Built by Adeshina
        </div>
      </footer>
    </div>
  );
}

export default Footer;
