'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navbar from '../components/navbar/navBar';
import Footer from '../components/footer';

// Dynamically import LottiePlayer with SSR disabled
const LottiePlayer = dynamic(() => import('../components/LottiePlayer'), {
  ssr: false,
});

export default function CareersPage() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch('/resources/animations/Teamwork.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load Lottie animation:', err));
  }, []);

  const jobs = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build interactive EdTech interfaces using React, TypeScript, and Tailwind CSS.',
    },
    {
      title: 'Content Strategist',
      location: 'Delhi NCR',
      type: 'Contract',
      description: 'Craft compelling educational content and align it with curriculum goals.',
    },
    {
      title: 'Growth Marketing Manager',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive user acquisition and manage performance marketing campaigns.',
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      <main className="px-6 md:px-12 lg:px-24 py-12 space-y-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500">
            Join the EduNex Team
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Shape the future of education with a team that values impact, innovation, and collaboration.
          </p>
        </motion.section>

        {/* Why Work With Us */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Why Work With Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base leading-relaxed">
              <li>🚀 Meaningful impact on learners’ lives</li>
              <li>🌎 Remote-friendly & flexible schedule</li>
              <li>📚 Continuous learning culture</li>
              <li>🤝 Collaborative, inclusive environment</li>
            </ul>
          </div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 flex items-center justify-center"
          >
            {animationData && <LottiePlayer animationData={animationData} />}
          </motion.div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Open Positions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{job.location} · {job.type}</p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{job.description}</p>
                <Link href="#" className="inline-flex items-center text-blue-600 mt-4 font-medium hover:underline">
                  Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-blue-50 py-12 px-6 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Don't see a perfect role?</h2>
          <p className="text-gray-600 mb-6">We're always on the lookout for passionate educators and builders.</p>
          <Link href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Submit a General Application
          </Link>
        </motion.section>
      </main>
      

      <Footer />
    </div>
  );
}
