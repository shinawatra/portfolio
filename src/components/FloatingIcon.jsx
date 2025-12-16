import { motion } from 'framer-motion';

const FloatingIcon = ({ children, distance = 150, duration = 6 }) => {
  return (
    <motion.div
      initial={{ x: -distance }}
      animate={{ x: distance }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingIcon;
