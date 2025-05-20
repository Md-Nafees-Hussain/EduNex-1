'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface MyComponentProps {
  children: React.ReactNode;
}

const MyComponent: FC<MyComponentProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default MyComponent;
