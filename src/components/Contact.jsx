import {
  FaEnvelope,
  FaRegCopy,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDownload,
} from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Form from './Form';
import { Element } from 'react-scroll';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const email = 'adegbite.contact@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy email. Please try again.');
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <Element name="contact">
      <motion.section
        className="mx-5 md:mx-6 mt-20 xl:mx-20"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        whileHover={{ y: -8 }}
      >
        <h1 className="text-center text-[#111] dark:text-[#cffffa] text-3xl md:text-4xl tracking-widest font-bold uppercase after:content-[''] after:block after:w-20 md:after:w-[100px] after:h-1 after:m-auto after:mt-7 after:bg-[#3B82F6] dark:after:bg-linear-to-br dark:after:from-[#60a5fa] dark:after:to-[#3b82f6]">
          Get in touch
        </h1>
        <p className="text-center mt-10 text-[#1a1a1a] dark:text-[#e6f3f2]">
          I'm always open to discussing new opportunities, collaborations, or
          just having a great conversation about technology and development.
        </p>

        <div className="flex flex-col xl:flex-row gap-20 mt-20">
          <Form />

          <aside className="w-full xl:w-1/2">
            {/* First box  */}
            <div className="p-6 bg-slate-50 dark:bg-[#1e293b] shadow-lg border border-slate-200 dark:border-[#334155] rounded-xl backdrop-blur-sm mb-5">
              <div className="flex items-center gap-2 mb-2.5">
                <FaEnvelope className="text-blue-600 dark:text-[#60a5fa] size-4 md:size-5" />
                <span className="text-base font-semibold text-slate-800 dark:text-[#f1f5f9]">
                  Quick Contact
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaEnvelopeOpen className="text-blue-600 dark:text-[#60a5fa]" />
                  <span className="text-slate-700 dark:text-[#f1f5f9] text-sm md:text-base">
                    {email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="ml-2 cursor-pointer text-[#f1f5f9]"
                >
                  {copied ? (
                    'Copied!'
                  ) : (
                    <FaRegCopy className="text-blue-600 dark:text-[#60a5fa]" />
                  )}{' '}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mt-4">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-[#60a5fa]" />
                  <span className="text-sm md:text-base text-slate-700 dark:text-[#f1f5f9]">
                    Lagos, Nigeria
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mt-4">
                  <FaBriefcase className="text-blue-600 dark:text-[#60a5fa]" />
                  <span className="text-sm md:text-base text-slate-700 dark:text-[#f1f5f9]">
                    Available for freelance projects
                  </span>
                </div>
              </div>
            </div>

            {/* Second box  */}
            <div className="p-6 bg-slate-50 dark:bg-[#1e293b] shadow-lg border border-slate-200 dark:border-[#334155] rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2.5">
                <FaDownload className="text-blue-600 dark:text-[#60a5fa] size-5" />
                <h3 className="text-base md:text-xl text-slate-800 dark:text-[#f1f5f9] font-semibold">
                  Resume
                </h3>
              </div>
              <p className="text-base text-slate-700 dark:text-[#f1f5f9]">
                Download my latest resume to learn more about my experience and
                skills
              </p>
              <a
                href="/Ade-new resume.pdf"
                target="_blank"
                className="group flex items-center gap-2 mt-4 bg-blue-600 dark:bg-linear-to-br dark:from-[#60a5fa] dark:to-[#3b82f6] text-white font-semibold rounded-xl w-full lg:w-1/2 justify-center py-3 px-6 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <FaDownload className="text-white size-5 transition group-hover:text-white" />
                <span className="text-base font-semibold">Download Resume</span>
              </a>
            </div>
          </aside>
        </div>
      </motion.section>
    </Element>
  );
}

export default Contact;
