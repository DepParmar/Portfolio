import { motion } from 'framer-motion';

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedDiv = ({ children, className = '', delay = 0 }: AnimatedDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};