import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaPhp,
  FaCloudflare,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiCloudinary,
  SiChartdotjs,
  SiTypescript,
  SiExpress,
} from 'react-icons/si';
import FloatingIcon from './FloatingIcon';

function Skills() {
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-[#e34f26] size-[25px] md:size-[30px]" />,
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="text-[#1572b6] size-[25px] md:size=[30px]" />,
    },
    {
      name: 'Cloudflare',
      icon: (
        <FaCloudflare className="text-[#1572b6] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <SiJavascript className="text-[#f7df1e] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'React',
      icon: <FaReact className="text-[#61dafb] size-[25px] md:size-[30px]" />,
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <SiTailwindcss className="text-[#38bdf8] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'Typescript',
      icon: (
        <SiTypescript className="text-[#1572b6] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'Node',
      icon: <FaNodeJs className="text-[#215732] size-[25px] md:size-[30px]" />,
    },
    {
      name: 'Github',
      icon: (
        <FaGithub className="text-black dark:text-[#fafafa] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'Git',
      icon: <FaGit className="text-[#e34f26] size-[25px] md:size-[30px]" />,
    },
    {
      name: 'NextJs',
      icon: (
        <SiNextdotjs className="text-black dark:text-[#fafafa] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'Php',
      icon: <FaPhp className="text-[#777BB3] size-[25px] md:size-[30px]" />,
    },
    {
      name: 'Vite',
      icon: <SiVite className="text-[#3d1663] size-[25px] md:size-[30px]" />,
    },
    {
      name: 'Cloudinary',
      icon: (
        <SiCloudinary className="text-[#1572b6] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'Chart',
      icon: (
        <SiChartdotjs className="text-[#FFA500] size-[25px] md:size-[30px]" />
      ),
    },
    {
      name: 'Express',
      icon: <SiExpress className="text-[#008000] size-[25px] md:size-[30px]" />,
    },
  ];

  // Animation variants for the skill item
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Staggered entrance
        duration: 0.5,
        ease: 'backOut',
      },
    }),
  };

  // Animation for icon hover
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10, // Subtle rotation on hover
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <h1 className="font-bold text-center xl:text-left text-2xl text-[#111] dark:text-[#cffffa]">
        My Skills
      </h1>
      <ul className="grid grid-cols-4 md:grid-cols-7 xl:grid-cols-4 gap-5 mt-7 overflow-hidden">
        {skills.map((skill, index) => (
          <FloatingIcon distance={140} duration={8} key={index}>
            <motion.li
              key={index}
              variants={skillVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass index for staggered animation
              whileHover={{ scale: 1.2 }} // Scale entire item on hover
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover" // Icon-specific hover animation
              >
                {skill.icon}
              </motion.span>
              <span className="text-[#1a1a1a] dark:text-[#e6f3f2] text-sm md:text-base">
                {skill.name}
              </span>
            </motion.li>
          </FloatingIcon>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

// className="grid grid-cols-4 md:grid-cols-7 xl:grid-cols-4 gap-5 mt-7 overflow-hidden"
