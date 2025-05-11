'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection: FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-6 sm:px-10 lg:px-20 bg-white">
      
      {/* Left: Text */}
      <motion.div
        className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          About Edunex
        </h2>
        <p className="text-gray-700 mb-6 font-medium text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
          Innovating education technology with modern design and user-centric solutions for a brighter learning experience.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-black border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
          aria-label="Learn more about Edunex"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Right: Unified Mockup Container */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full max-w-[480px] rounded-xl overflow-hidden shadow-xl">
          {/* Desktop UI */}
          <Image
            src="/resources/desktop-dashboard-mockup.png"
            alt="Realistic dashboard mockup of Edunex platform"
            width={1000}
            height={600}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />

          {/* Mobile UI Overlay */}
          {/* Mobile UI Overlay */}


        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
