'use client';

import {
  Activity,
  MessageSquare,
  CalendarCheck2,
  ShieldCheck,
  ClipboardList,
  MonitorSmartphone,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real-time Progress Tracking',
    desc: 'Monitor student growth with visual reports and analytics.',
    icon: Activity,
  },
  {
    title: 'Parent Communication',
    desc: 'Seamlessly notify parents with updates and feedback.',
    icon: MessageSquare,
  },
  {
    title: 'Attendance Management',
    desc: 'Digital attendance records with daily summaries.',
    icon: CalendarCheck2,
  },
  {
    title: 'Secure Admin Control',
    desc: 'Role-based access with audit logs and permission control.',
    icon: ShieldCheck,
  },
  {
    title: 'Curriculum Planner',
    desc: 'Build and assign structured lesson plans with ease.',
    icon: ClipboardList,
  },
  {
    title: 'Multi-device Access',
    desc: 'EduNex works flawlessly on mobile, tablets, and desktops.',
    icon: MonitorSmartphone,
  },
];

export default function FeatureGridSection() {
  return (
    <section className="py-24 bg-white">
        
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Built for Modern Education
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          EduNex brings together everything your school needs to engage students, empower teachers, and inform parents.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-left bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl">
                <feature.icon className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      

    </section>
    
  );
}
