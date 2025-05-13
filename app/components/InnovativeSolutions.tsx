'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Coding Environment',
    description: 'Launch real-time collaborative code spaces for students.',
    image: '/resources/Code-Editor-UI.png',
  },
  {
    title: 'Educational Apps',
    description: 'Custom mobile apps tailored to curriculum and gamified learning.',
    image: '/resources/Educational-App.png',
  },
  {
    title: 'All-in-One Meeting App',
    description: 'Seamless video, whiteboard, and screen share in one place.',
    image: '/resources/All-in-One-Meeting.png',
  },
  {
    title: 'Interactive Learning Tool',
    description: 'Drag-and-drop modules, quizzes, and simulations for engagement.',
    image: '/resources/Learning-tool.jpg',
  },
  {
    title: 'Visual Dashboard',
    description: 'Track student progress, assignments, and assessments at a glance.',
    image: '/resources/Visual-Dashboard.png',
  },
  {
    title: 'Mobile Learning Platform',
    description: 'Anytime, anywhere access to lessons with bite-sized content.',
    image: '/resources/microlearning.png',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Detailed insights on learner performance and trends.',
    image: '/resources/Analytics-Dashboard.png',
  },
];

const InnovativeSolutions: FC = () => {
  return (
    <motion.section
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-20 bg-[#f4f8fb]"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Innovative Solutions</h2>
      <p className="text-gray-600 text-base sm:text-lg mb-12 text-center max-w-2xl mx-auto">
        Explore our cutting-edge designs and exceptional educational technology offerings.
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-md group relative cursor-pointer"
          >
            <div
              className={`relative w-full overflow-hidden rounded-2xl ${
                index % 4 === 0
                  ? 'h-[320px]'
                  : index % 4 === 1
                  ? 'h-[260px]'
                  : index % 4 === 2
                  ? 'h-[300px]'
                  : 'h-[240px]'
              }`}
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Default title - bottom center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center z-10 transition-opacity duration-300 group-hover:opacity-0 px-4 drop-shadow-md">
                {solution.title}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center px-6 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-sm max-w-xs opacity-90">{solution.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default InnovativeSolutions;
