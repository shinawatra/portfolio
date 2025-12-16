import { Element } from 'react-scroll';
import { FaGlobe, FaPlug, FaShoppingCart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <Element name="service">
      <motion.section
        className="mx-5 md:mx-6 mt-20 xl:mx-20"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        whileHover={{ y: -8 }}
      >
        <h1 className="text-center text-3xl md:text-4xl tracking-widest font-bold uppercase text-[#111] dark:text-[#cffffa] after:content-[''] after:block after:w-20 md:after:w-[100px] after:h-1 after:bg-[#3B82F6] dark:after:bg-linear-to-br dark:after:from-[#60a5fa] dark:after:to-[#3b82f6] after:rounded after:m-auto after:mt-7">
          Services I Offer
        </h1>
        <p className="text-center mt-10 text-base md:text-lg text-[#1a1a1a] dark:text-[#e6f3f2]">
          I provide freelance services to help bring your digital ideas to life
          or solve existing technical challenges.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-20">
          <aside className="w-full rounded-xl bg-slate-50 dark:bg-[#334155] shadow-lg p-5 border border-slate-200 dark:border-[#334155]">
            <div className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition-colors size-[50px] flex justify-center items-center">
              <FaGlobe className="text-3xl text-blue-600 dark:text-white" />
            </div>
            <h1 className="font-bold text-lg md:text-xl text-[#111] dark:text-[#f1f5f9] mt-4 mb-2">
              Website Development (Business & Personal)
            </h1>
            <ul className="list-disc list-inside text-[#1a1a1a] dark:text-[#e6f3f2] space-y-2 text-sm md:text-base">
              <li>Landing pages and portfolio sites</li>
              <li>Corporate and business websites</li>
              <li>Responsive, SEO-optimazed design</li>
            </ul>
          </aside>

          <aside className="w-full rounded-xl bg-slate-50 dark:bg-[#334155] shadow-lg p-5 border border-slate-200 dark:border-[#334155]">
            <div className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition-colors size-[50px] flex justify-center items-center">
              <VscCode className="text-3xl mx-auto text-blue-600 dark:text-white" />
            </div>
            <h1 className="font-bold text-lg md:text-xl text-[#111] dark:text-[#f1f5f9] mt-4 mb-2">
              Frontend Development
            </h1>
            <ul className="list-disc list-inside text-[#1a1a1a] dark:text-[#e6f3f2] space-y-2 text-sm md:text-base">
              <li>Pixel-perfect Figma to HTML conversions</li>
              <li>Modern, responsive UIs with Tailwind, React, Nextjs</li>
              <li>Responsive, SEO-optimazed design</li>
            </ul>
          </aside>

          <aside className="w-full rounded-xl bg-slate-50 dark:bg-[#334155] shadow-lg p-5 border border-slate-200 dark:border-[#334155]">
            <div className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition-colors size-[50px] flex justify-center items-center">
              <FaShoppingCart className="text-3xl mx-auto text-blue-600 dark:text-white" />
            </div>
            <h1 className="font-bold text-lg md:text-xl text-[#111] dark:text-[#f1f5f9] mt-4 mb-2">
              E-Commerce Solutions
            </h1>
            <ul className="list-disc list-inside text-[#1a1a1a] dark:text-[#e6f3f2] space-y-2 text-sm md:text-base">
              <li>Payment gateway integration</li>
              <li>Custom online stores</li>
              <li>Product catalog, checkout & order tracking</li>
            </ul>
          </aside>

          <aside className="w-full rounded-xl bg-slate-50 dark:bg-[#334155] shadow-lg p-5 border border-slate-200 dark:border-[#334155]">
            <div className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 transition-colors size-[50px] flex justify-center items-center">
              <FaPlug className="text-3xl mx-auto text-blue-600 dark:text-white" />
            </div>
            <h1 className="font-bold text-lg md:text-xl text-[#111] dark:text-[#f1f5f9] mt-4 mb-2">
              API Integration
            </h1>
            <ul className="list-disc list-inside text-[#1a1a1a] dark:text-[#e6f3f2] space-y-2 text-sm md:text-base">
              <li>RESTful APIs for web apps</li>
              <li>Third-party service integrations</li>
            </ul>
          </aside>
        </div>
      </motion.section>
    </Element>
  );
}

export default Services;
