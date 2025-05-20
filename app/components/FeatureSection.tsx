'use client';

import { motion } from 'framer-motion';
import {
  BarChart2,
  GraduationCap,
  Users,
  Brain,
  Lock,
  Smartphone
} from 'lucide-react';


const features = [
  {
    icon: <BarChart2 className="w-8 h-8 text-purple-600" />,
    title: 'Smart Analytics',
    description: 'Track student performance and trends in real-time.',
  },
 {
  icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
  title: 'Teacher Tools',
  description: 'Built-in lesson planning, grading, and communication.',
},

  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: 'Parent Portal',
    description: 'Keep families in the loop with instant updates and feedback.',
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    title: 'AI Suggestions',
    description: 'Smart recommendations to support personalized learning.',
  },
  {
    icon: <Lock className="w-8 h-8 text-purple-600" />,
    title: 'Secure Access',
    description: 'Role-based logins for students, staff, and parents.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
    title: 'Mobile-First',
    description: 'Seamless learning experience across any device.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Everything You Need to Power Modern Learning
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
