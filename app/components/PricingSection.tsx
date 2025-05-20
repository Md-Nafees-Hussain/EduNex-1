'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: ['Access for 1 School', '10 Teachers', 'Standard Reports'],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '₹999/mo',
    features: ['Unlimited Schools', 'Advanced Analytics', 'Priority Support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Onboarding Support', 'Dedicated Manager', 'Custom Integrations'],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-purple-50 pt-0 pb-24">
      {/* Top Curved Divider */}
      <div className="-mt-1">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C360,100 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple Pricing for Every School
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Whether you're a single school or a large institution, EduNex has a plan that fits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border ${
                plan.highlight ? 'border-purple-600 shadow-lg' : 'border-gray-200'
              } bg-white p-8 flex flex-col justify-between`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <div className="text-2xl font-bold text-purple-600 my-4">{plan.price}</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-medium transition ${
                  plan.highlight
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.price === 'Free' ? 'Get Started' : 'Choose Plan'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
