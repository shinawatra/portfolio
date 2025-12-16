import Skills from './Skills';
import { Element, Link } from 'react-scroll';
import { motion } from 'framer-motion';

function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <Element name="about">
      <motion.section
        className="mx-5 md:mx-6 mt-20 xl:mx-20"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        whileHover={{ y: -8 }}
      >
        <h1 className="text-center text-3xl md:text-4xl tracking-widest font-bold uppercase text-[#111] dark:text-[#cffffa] after:content-[''] after:block after:w-20 md:after:w-[100px] after:h-1 after:bg-[#3B82F6] dark:after:bg-linear-to-br dark:after:from-[#60a5fa] dark:after:to-[#3b82f6] after:rounded after:m-auto after:mt-7">
          About me
        </h1>
        <p className="text-center mt-10 text-base md:text-lg text-[#1a1a1a] dark:text-[#e6f3f2]">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of <br /> programming and technology
        </p>

        <div className="flex flex-col xl:flex-row gap-24 mt-20">
          <aside className="w-full xl:w-1/2">
            <h1 className="font-bold text-center xl:text-left text-2xl text-[#111] dark:text-[#cffffa]">
              Get to know me!
            </h1>
            <p className="mt-7 text-center xl:text-left text-[#1a1a1a] dark:text-[#e6f3f2]">
              I’m a self-taught front-end developer based in Lagos, Nigeria. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences. Transforming my creativity
              and knowledge into a websites has been my passion for over two
              years. I have been helping various clients to establish their
              presence online. I always strive to learn about the newest
              technologies and frameworks. I'm open to Job opportunities where I
              can contribute, learn and grow. If you have a good opportunity
              that matches my skills and experience then don't hesitate to
              contact me.
            </p>
            <Link
              className=" bg-[#2563EB] dark:bg-linear-to-br dark:from-[#60a5fa] dark:to-[#3b82f6] shadow-lg shadow-blue-500/30 hover:from-[#93c5fd] hover:to-[#60a5fa] hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 text-center w-[200px] p-4 text-lg md:text-2xl rounded text-white uppercase font-semibold hover:opacity-80 cursor-pointer block mt-10 mx-auto xl:mx-0"
              to="contact"
            >
              Contact
            </Link>
          </aside>

          {/* Skill session */}
          <aside className="w-full xl:w-1/2">
            <Skills />
          </aside>
        </div>
      </motion.section>
    </Element>
  );
}

export default About;
