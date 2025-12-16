import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl bg-slate-50 dark:bg-[#334155] shadow-lg"
    >
      {/* Image */}
      <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" /> */}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-[#111] dark:text-[#f1f5f9]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[#1a1a1a] dark:text-[#cbd5e1] line-clamp-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-400 dark:bg-blue-100 px-3 py-1 text-xs font-medium text-white dark:text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-blue-800 dark:text-[#60a5fa] hover:text-[#1D4ED8] dark:hover:text-indigo-400 hover:underline hover:underline-offset-4"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-[#a78bfa] hover:text-slate-700 dark:hover:text-[#c4b5fd]"
            >
              <FaGithub className="text-black dark:text-white" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
