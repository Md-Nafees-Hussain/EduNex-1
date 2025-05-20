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
      'Absolutely. The built-in dashboard provides real-time analytics on attendance, assignments, and communication with parents.',
  },
];

export default function FaqSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-gray-900 font-medium text-base">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-purple-600" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden text-sm text-gray-600 mt-3"
          >
            <div className="pb-2">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
