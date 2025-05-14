'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is EduNex and how does it help?',
    answer:
      'EduNex is an EdTech platform offering tools for online learning, progress tracking, and interactive modules tailored for modern education.',
  },
  {
    question: 'Is EduNex suitable for K-12 schools?',
    answer:
      'Yes, EduNex is designed to scale from early education to higher learning institutions, with customizable tools for each level.',
  },
  {
    question: 'Can I track student performance in real-time?',
    answer:
      'Absolutely. The built-in analytics dashboard provides live data on student engagement, assignments, and assessment progress.',
  },
  {
    question: 'Do you support mobile learning?',
    answer:
      'Yes, all EduNex tools are mobile-responsive and accessible through our dedicated apps and web platform.',
  },
  {
    question: 'How do I get started with EduNex?',
    answer:
      'Just visit our contact page or request a demo to connect with our onboarding team. We’ll guide you every step of the way.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-2">
          Answers to some common queries about EduNex and our solutions.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-xl p-4 bg-gray-50">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mt-3 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
