'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StackedCards from '../StackedCards/stackedCards';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const HeroBox = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-800 to-blue-500 min-h-screen flex flex-col justify-between">
      {/* Section Container */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-12 gap-x-10 px-6 md:px-10 xl:px-16 py-12 min-h-[calc(100vh-64px)] ">
        
        {/* Left Section */}
        <motion.div
          className={`flex w-full lg:w-1/2 flex-col items-center lg:items-center justify-center text-center lg:text-left px-2 sm:px-4 ${poppins.className}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl w-full lg:text-center md:text-5xl font-bold text-white leading-tight ">
            Welcome to <br /> EduTech Solutions
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-lg lg:text-center w-full">
            Transforming education through innovative technology solutions
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition cursor-pointer shadow-md"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section: Stacked Cards */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-center items-center h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[450px] flex justify-center">
            <StackedCards />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBox;
