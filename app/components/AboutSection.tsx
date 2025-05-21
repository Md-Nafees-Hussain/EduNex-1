'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Blob Background */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-30 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left: Image with badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 relative"
        >
          {/* Floating Badge */}
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow text-sm font-medium text-purple-600 z-20">
            💡 Interactive Learning
          </div>

          {/* Illustration */}
          <Image
            src="/resources/Seminar-pana.svg"
            alt="EduNex collaborative learning"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-contain"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built to Transform How Education Works
          </h2>
          <p className="text-gray-600 text-lg">
            EduNex is designed for the future of learning — combining smart analytics, personalized tools, and real-time insights to elevate outcomes for every stakeholder.
          </p>

          {/* Feature List with Icons */}
          <div className="space-y-4">
            {[
              'Empowers educators with real-time dashboards',
              'Supports parents with instant updates & communication',
              'Tracks student growth with data-backed insights',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
