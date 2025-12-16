import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../projectData';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element name="projects">
      <section className="mx-5 md:mx-6 mt-20 xl:mx-20">
        <div className="mx-auto w-full lg:max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl md:text-4xl font-bold text-[#111] dark:text-[#cffffa] after:content-[''] after:block after:w-20 md:after:w-[100px] after:h-1 after:m-auto after:mt-7 after:bg-[#3B82F6] dark:after:bg-linear-to-br dark:after:from-[#60a5fa] dark:after:to-[#3b82f6]"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center text-base text-[#1a1a1a] dark:text-[#e6f3f2]"
          >
            A showcase of my recent work featuring modern web applications,
            built with cutting-edge technologies.
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
