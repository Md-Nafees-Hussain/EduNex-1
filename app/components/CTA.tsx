'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white py-16 px-6 md:px-20 text-center rounded-2xl "
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        Ready to Empower Your Educators?
      </h2>
      <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8">
        Let us show you how EduNex can transform your learning platform through innovation, simplicity, and real results.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition-colors"
          >
            Book a Demo
          </motion.button>
        </Link>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default CTA;
