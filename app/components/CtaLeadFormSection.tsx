'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, CheckCircle } from 'lucide-react';

export default function CtaLeadFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative pb-24 pt-0 bg-gradient-to-br from-purple-100 to-white overflow-hidden">
      <div className="mb-2">
  <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
    <path d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z" fill="white" />
  </svg>
</div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Ready to transform your school?
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
            Let us show you how EduNex streamlines communication, simplifies tracking,
            and empowers teachers, parents, and administrators.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-600">✔</span> Book a free live demo
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">✔</span> No commitment required
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">✔</span> Personalized walkthrough
            </li>
          </ul>
        </motion.div>

        {/* Right Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6 w-full"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Book Your Demo</h3>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full outline-none text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      placeholder="you@school.edu"
                      className="w-full outline-none text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <div className="flex items-start gap-2 border border-gray-300 rounded-lg px-3 py-2">
                    <MessageSquare className="w-4 h-4 mt-1 text-gray-500" />
                    <textarea
                      placeholder="Any specific questions or goals?"
                      className="w-full outline-none text-sm resize-none"
                      rows={3}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition"
                >
                  Request Demo
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center space-y-4 py-12"
              >
                <CheckCircle className="w-10 h-10 text-green-500" />
                <h4 className="text-lg font-semibold text-gray-800">Thank you!</h4>
                <p className="text-gray-600 text-sm max-w-sm">
                  Your request has been received. We’ll be in touch soon with your personalized demo.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
