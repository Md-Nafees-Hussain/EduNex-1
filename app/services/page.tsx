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

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero */}
      {/* Hero */}
      <section className="relative bg-purple-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <nav className="text-sm text-purple-600 font-medium" aria-label="Breadcrumb">
              <ol className="list-reset flex space-x-2">
                <li>
                  <Link href="/" className="hover:underline">Home</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-purple-700 font-semibold">
                  Services
                </li>
              </ol>
            </nav>
          </motion.div>

          {/* Heading + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services that Power Future-Ready Education
            </h1>
            <p className="text-gray-700 text-base md:text-lg">
              EduNex offers a complete suite of tools to empower educators, engage parents,
              and track student success — all from one unified platform.
            </p>
          </motion.div>
        </div>
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
