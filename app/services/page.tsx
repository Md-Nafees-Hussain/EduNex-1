'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  BarChart3,
  ClipboardList,
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '../lib/utils';

import Navbar from '../components/navbar/navBar';
import DemoTourSection from '../components/DemoTourSection';
import Footer from '../components/footer';
import HowItWorksSection from '../components/HowItWorksSection';
import UseCaseTabsSection from '../components/UseCaseTabsSection';

const services = [
  {
    title: 'Smart Classrooms',
    description: 'Enable interactive learning experiences with real-time tools and dashboards.',
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
    category: 'Schools',
  },
  {
    title: 'Parent Engagement',
    description: 'Keep parents informed with instant alerts, progress reports, and communication.',
    icon: <Users className="w-6 h-6 text-purple-600" />,
    category: 'Parents',
  },
  {
    title: 'Performance Analytics',
    description: 'Track student performance and growth with visual, data-driven insights.',
    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
    category: 'Schools',
  },
  {
    title: 'Homework & Attendance',
    description: 'Automate daily homework, attendance tracking, and timely reporting.',
    icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
    category: 'Schools',
  },
  {
    title: 'Digital Library',
    description: 'Access curated digital content and resources for every grade and subject.',
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    category: 'All',
  },
  {
    title: 'Helpdesk & Support',
    description: '24/7 support and ticketing system for teachers, students, and parents.',
    icon: <HelpCircle className="w-6 h-6 text-purple-600" />,
    category: 'Parents',
  },
];

const categories = ['All', 'Schools', 'Parents'];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-purple-50 py-16 md:py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Services that Power Future-Ready Education
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            EduNex offers a complete suite of tools to empower educators, engage parents,
            and track student success — all from one unified platform.
          </p>
        </motion.div>
      </section>

      {/* Service Categories & Cards */}
      <section className="bg-white py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-gray-900"
          >
            Explore Our Services
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-full border text-sm font-medium transition',
                activeCategory === cat
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-300 text-gray-600 hover:bg-purple-100'
              )}
              aria-label={`Filter services by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="mb-4" aria-hidden="true">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <DemoTourSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Use Case Tabs */}
      <UseCaseTabsSection />

      <Footer />
    </>
  );
}
