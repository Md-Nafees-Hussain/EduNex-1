'use client';

import demoAnimation from '@/public/resources/animations/Dashboard-Animated2.json';
import LottiePlayer from '../components/LottiePlayer';
import { motion } from 'framer-motion';

export default function DemoTourSection() {
  return (
    <section className="relative bg-purple-50 py-5 px-6 text-center overflow-hidden">
      {/* Top Curve Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            fill="#ffffff" // Matches the section above (white)
          />
        </svg>
      </div>

      {/* Decorative Blob */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-30 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">See EduNex in Action</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Experience a quick overview of our interactive dashboard and see how EduNex simplifies learning management.
        </p>

        <div className="w-full max-w-3xl mx-auto mb-8">
          <LottiePlayer animationData={demoAnimation} />
        </div>

        <motion.a
          href="/contact"
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg"
        >
          Book Your Live Demo
        </motion.a>
      </motion.div>
    </section>
  );
}
