'use client';

import { Metadata } from 'next';
import Navbar from '../components/navbar/navBar';
import Footer from '../components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ClientStoriesSection from '../components/ClientStoriesSection';
import QuoteWallSection from '../components/QuoteWall';
import { ArrowRight } from 'lucide-react';
import SupportSection from '../components/SupportSection';
import TrustedBySection from '../components/trustedBy';


export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
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
            Clients
          </li>
        </ol>
      </nav>
    </motion.div>

    {/* Centered Heading & Description */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Trusted by Leading Institutions Across India
      </h1>
      <p className="text-gray-700 text-base md:text-lg">
        We’ve partnered with schools, colleges, and education innovators who trust EduNex to deliver meaningful
        digital transformation in classrooms and beyond.
      </p>
    </motion.div>
  </div>
        </section>
        <ClientStoriesSection/>
        <QuoteWallSection/>
        <TrustedBySection/>
        <section className="bg-white py-20 px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join hundreds of schools already using EduNex to engage students, empower teachers,
              and simplify parent communication.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
            </Link>
          </div>
        </section>
        <SupportSection/>
        








        {/* Next: Logo Grid, Testimonials, CTA */}
      </main>
      <div className="w-full overflow-hidden leading-none rotate-180">
  <svg
    viewBox="0 0 1440 120"
    className="w-full h-[80px] block"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,0 C480,100 960,20 1440,80 L1440,120 L0,120 Z"
      fill="#FAF5FF"
    />
  </svg>
      </div>

      <Footer />
    </>
  );
}
