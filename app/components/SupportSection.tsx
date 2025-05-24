'use client';

import {
  GraduationCap,
  Headset,
  LayoutDashboard,
  UserPlus,
} from 'lucide-react';

const iconMap = {
  UserPlus: <UserPlus className="w-6 h-6 text-purple-600" />,
  Headset: <Headset className="w-6 h-6 text-purple-600" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-purple-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-purple-600" />,
};

const supportItems = [
  {
    title: 'Dedicated Onboarding',
    description:
      'Every institution gets a hands-on onboarding manager to ensure a smooth and confident platform rollout.',
    icon: 'UserPlus',
  },
  {
    title: '24/7 Priority Support',
    description:
      'We’re always available — from urgent issues to day-to-day questions, via chat, email, or phone.',
    icon: 'Headset',
  },
  {
    title: 'Custom Dashboards',
    description:
      'We help tailor EduNex to your specific academic structure and reporting needs.',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Ongoing Training',
    description:
      'Regular webinars and in-app guidance keep your team confident and up to date.',
    icon: 'GraduationCap',
  },
];

export default function SupportSection() {
  return (
    <section className="bg-purple-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          How We Support Our Clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {supportItems.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 overflow-hidden group"
            >
              {/* Left gradient bar (hidden until hover) */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Right gradient bar */}
              <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card content */}
              <div className="relative z-10">
                <div className="mb-4">
                  {iconMap[item.icon as keyof typeof iconMap]}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
