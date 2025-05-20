'use client';

import { GraduationCap, Building2, Smile, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const CountUpStat = dynamic(() => import('./CountUpStat'), { ssr: false });

const stats = [
  {
    icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
    value: 20000,
    suffix: '+',
    label: 'Students Empowered',
  },
  {
    icon: <Building2 className="w-8 h-8 text-purple-600" />,
    value: 400,
    suffix: '+',
    label: 'Schools Onboarded',
  },
  {
    icon: <Smile className="w-8 h-8 text-purple-600" />,
    value: 95,
    suffix: '%',
    label: 'Satisfaction Rate',
  },
  {
    icon: <Gauge className="w-8 h-8 text-purple-600" />,
    value: 5,
    suffix: 'x',
    label: 'Faster Teacher Workflow',
  },
];

export default function ImpactStatsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="-mt-1 ">
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
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Delivering Impact at Every Level
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              {stat.icon}
              <div className="text-2xl font-bold text-gray-900 mt-4">
                <CountUpStat end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
