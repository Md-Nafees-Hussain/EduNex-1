'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, School, Users } from 'lucide-react';

const steps = [
  {
    title: 'Create Your Institution',
    description: 'Sign up and register your school or coaching center within minutes.',
    icon: <Users className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Onboard Teachers & Students',
    description: 'Easily onboard staff and learners with unique logins and smart dashboards.',
    icon: <School className="w-8 h-8 text-purple-600" />,
  },
  {
    title: 'Track & Empower',
    description: 'Monitor progress, engage parents, and streamline learning experiences.',
    icon: <ClipboardCheck className="w-8 h-8 text-purple-600" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-24 px-6 text-center relative overflow-hidden">
      {/* Section Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How EduNex Works</h2>
        <p className="text-lg text-gray-600">
          Get started in just three easy steps and transform the way your institution operates.
        </p>
      </motion.div>

      {/* Steps Flow */}
      {/* Desktop Horizontal Cards */}
<div className="hidden md:flex flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="relative bg-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition w-full max-w-sm text-center"
    >
      <div className="text-sm text-purple-600 font-semibold mb-2">Step {index + 1}</div>
      <div className="mb-4 flex justify-center">{step.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
      <p className="text-gray-600 text-sm">{step.description}</p>

      {/* Arrow */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute right-[-48px] top-1/2 transform -translate-y-1/2">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 12h44M36 4l8 8-8 8"
              stroke="#a855f7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </motion.div>
  ))}
</div>

{/* Mobile Vertical Timeline */}
<div className="flex flex-col gap-10 md:hidden max-w-md mx-auto relative pl-6 border-l-2 border-purple-200">
  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="relative"
    >
      {/* Dot Icon */}
      <div className="absolute -left-3 top-1.5 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow">
        {index + 1}
      </div>

      <div className="bg-purple-50 p-4 rounded-xl shadow">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-purple-600">{step.icon}</div>
          <h3 className="text-base font-semibold text-gray-800">{step.title}</h3>
        </div>
        <p className="text-sm text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
}
