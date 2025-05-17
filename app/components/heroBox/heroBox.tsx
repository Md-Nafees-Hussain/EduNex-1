'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StackedCards from '../StackedCards/stackedCards';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.7 } },
};

const HeroBox = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 min-h-screen flex flex-col justify-between">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-12 gap-x-10 px-6 sm:px-8 md:px-10 xl:px-16 py-16 min-h-[calc(100vh-64px)]">
        
        {/* Left Section */}
        <motion.div
          className={`flex w-full lg:w-1/2 flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-4 ${poppins.className}`}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/80 drop-shadow-md"
        >
          Welcome to <br /> EduTech Solutions
          </motion.h1>


          <motion.p
            variants={item}
            className="text-base sm:text-lg text-white/90 mt-4 max-w-md sm:max-w-lg w-full"
          >
            Transforming education through innovative technology solutions
          </motion.p>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get Started with EduTech"
            className="mt-6 hover:cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:brightness-110 transition shadow-md"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[440px] xl:max-w-[500px]">
            <StackedCards />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBox;
