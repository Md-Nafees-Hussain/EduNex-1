'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel'; // ✅ Import your carousel component

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-10">
      {/* Background blob */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-100 rounded-full opacity-30 blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Redefining <span className="text-purple-600">Modern Learning</span><br />
            with EduNex
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            One platform to track student progress, empower teachers, and connect parents — built for the next generation of education.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold shadow-md hover:bg-purple-700 transition"
              >
                Book a Demo
              </motion.button>
            </Link>
            <Link href="#features">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-purple-600 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition"
              >
                Explore Platform
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Visual → Replaced with Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full h-auto relative"
        >
          {/* Background blob shape */}
          <div className="absolute -top-16 -right-10 w-[380px] h-[380px] bg-indigo-100 rounded-full blur-3xl opacity-40 z-0" />

          {/* Hero Carousel */}
          <HeroCarousel />
        </motion.div>
      </div>
    </section>
  );
}
