'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const personas = [
  {
    key: 'teachers',
    label: 'Teachers',
    title: 'Empower Your Teaching',
    description:
      'Access real-time dashboards, manage assignments, and track student progress with ease.',
    cta: 'Explore Tools for Teachers',
    image: '/resources/teachers.svg', // Placeholder
  },
  {
    key: 'students',
    label: 'Students',
    title: 'Learn Smarter, Not Harder',
    description:
      'All your lessons, homework, and feedback in one place to make learning efficient.',
    cta: 'Discover Student Experience',
    image: '/resources/students.svg',
  },
  {
    key: 'parents',
    label: 'Parents',
    title: 'Stay Informed, Anytime',
    description:
      'Track your child’s progress, attendance, and communicate easily with teachers.',
    cta: 'See Parent Dashboard',
    image: '/resources/parents.svg',
  },
  {
    key: 'admins',
    label: 'Admins',
    title: 'Manage With Confidence',
    description:
      'Oversee staff, monitor engagement, and manage institution performance from a single platform.',
    cta: 'Admin Console Overview',
    image: '/resources/admins.svg',
  },
];

export default function UseCaseTabsSection() {
  const [active, setActive] = useState(personas[0]);

  return (
    <section className="bg-gray-50 py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Built for Everyone</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {personas.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                active.key === p.key
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-300 text-gray-600 hover:bg-purple-100'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto"
          >
            {/* Left: Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{active.title}</h3>
              <p className="text-gray-600 text-base mb-6">{active.description}</p>
              <a
                href="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow"
              >
                {active.cta}
              </a>
            </div>

            {/* Right: SVG Image */}
            <div className="md:w-1/2">
              <div className="w-full h-auto relative aspect-[4/3]">
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  <svg
    className="relative block w-[calc(100%+1.3px)] h-[100px]"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
      fill="#ffffff" // 👈 match the background of the next section
    />
  </svg>
</div>

    </section>
  );
}
