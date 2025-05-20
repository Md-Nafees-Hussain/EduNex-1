'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';

const personas = [
  {
    id: 'educators',
    label: 'Educators',
    icon: <GraduationCap className="w-5 h-5" />,
    headline: 'Tools that empower modern teaching',
    benefits: [
      'Real-time student performance tracking',
      'Lesson planning & assignment tools',
      'Built-in communication with parents',
    ],
    image: '/resources/educator-view.svg',
    cta: 'Explore Educator Tools',
  },
  {
    id: 'parents',
    label: 'Parents',
    icon: <Users className="w-5 h-5" />,
    headline: 'Stay connected with your child’s learning',
    benefits: [
      'Instant updates on attendance & grades',
      'Direct messages from teachers',
      'Mobile access to reports & calendar',
    ],
    image: '/resources/parents-kids.svg',
    cta: 'Explore Parent Portal',
  },
  {
    id: 'admins',
    label: 'Admins',
    icon: <ShieldCheck className="w-5 h-5" />,
    headline: 'Manage your institution with confidence',
    benefits: [
      'Role-based access controls',
      'Analytics for enrollment & performance',
      'Secure document & data management',
    ],
    image: '/resources/Course app-pana.svg',
    cta: 'Explore Admin Features',
  },
];


export default function PersonasTabsSection() {
  const [active, setActive] = useState('educators');
  const current = personas.find((p) => p.id === active);

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Designed for Every Role in Education
          </h2>
          <p className="text-gray-600 max-w-xl">
            Whether you're a teacher, a parent, or an administrator — EduNex has the tools you need.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActive(persona.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                active === persona.id
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {persona.icon}
              {persona.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-5xl mx-auto text-left"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Left: Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={current?.image || ''}
                  alt={`${current?.label} View`}
                  width={500}
                  height={300}
                  className="rounded-xl object-contain shadow"
                />
              </div>

              {/* Right: Text + CTA */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {current?.headline}
                </h3>
                <ul className="space-y-3 mb-6">
                  {current?.benefits.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
                  {current?.cta}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
