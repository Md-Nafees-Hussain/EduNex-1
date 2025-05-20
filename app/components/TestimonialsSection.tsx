'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import animationData from '@/public/resources/animations/feedback.json';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('./LottiePlayer'), { ssr: false });


const testimonials = [
  {
    quote:
      'EduNex has completely transformed how we manage student progress. The real-time insights are game-changing for our teachers.',
    name: 'Aditi Sharma',
    role: 'Principal, Horizon International',
    avatar: '/resources/avatars/aditi.png',
  },
  {
    quote:
      'The parent dashboard is brilliant. I can track my child’s attendance and homework in one place. Huge stress relief!',
    name: 'Ravi Mehra',
    role: 'Parent, Grade 7 Student',
    avatar: '/resources/avatars/ravi.png',
  },
  {
    quote:
      'What impressed us most is the security and admin-level control. EduNex fits perfectly into our compliance workflows.',
    name: 'Neeraj Bansal',
    role: 'School IT Director',
    avatar: '/resources/avatars/neeraj.png',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonial-section" className="bg-purple-50 py-24">
      
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What People Say About EduNex
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Lottie animation */}
          <div className="hidden md:block md:w-1/3">
            <LottiePlayer animationData={animationData} />
          </div>

          {/* Testimonial Card */}
          <div className="relative w-full md:w-2/3 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-10 rounded-xl shadow-lg mx-auto max-w-2xl"
              >
                <Quote className="w-8 h-8 text-purple-500 mb-4 mx-auto" />
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  “{current.quote}”
                </blockquote>

                <div className="flex justify-center items-center gap-4 mt-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-purple-700 font-semibold">{current.name}</div>
                    <div className="text-sm text-gray-500">{current.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button onClick={handlePrev} className="w-9 h-9 flex justify-center items-center rounded-full bg-white shadow hover:bg-gray-100">
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button onClick={handleNext} className="w-9 h-9 flex justify-center items-center rounded-full bg-white shadow hover:bg-gray-100">
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-purple-600 w-4' : 'bg-purple-300 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="mt-20">
          <p className="text-sm text-gray-500 text-center mb-6">
            Trusted by leading institutions and innovators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70 grayscale">
            {['meta', 'hackerearth', 'brave', 'coze'].map((logo, i) => (
              <motion.img
                key={logo}
                src={`/resources/logos/${logo}.svg`}
                alt={`${logo} logo`}
                className="h-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
