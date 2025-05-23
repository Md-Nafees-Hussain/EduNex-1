'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aditi Sharma',
    role: 'Principal, Horizon International',
    quote:
      'EduNex gave our teachers the tools to truly understand student progress in real time.',
    avatar: '/resources/avatars/aditi.png',
  },
  {
    name: 'Ravi Mehra',
    role: 'Parent, Grade 7',
    quote:
      'For the first time, I feel completely connected to my child’s learning journey.',
    avatar: '/resources/avatars/ravi.png',
  },
  {
    name: 'Neeraj Kapoor',
    role: 'Tech Coordinator, NextGen Academy',
    quote:
      'Attendance, homework, reporting — EduNex streamlined it all beautifully.',
    avatar: '/resources/avatars/neeraj.png',
  },
];

export default function QuoteWallSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Voices of Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="relative bg-purple-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute top-6 right-6 w-6 h-6 text-purple-300" />
              <p className="text-lg text-gray-800 font-medium italic mb-6 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-purple-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-purple-200">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
