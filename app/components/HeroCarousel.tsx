'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart } from 'lucide-react';
import Image from 'next/image';

const cards = [
  {
    title: 'Smart Dashboard',
    desc: 'Real-time class analytics, attendance, and parent communication.',
    image: '/resources/dashboard.jpg',
    badge: 'Dashboard',
  },
  {
    title: 'Attendance Reports',
    desc: 'Instant attendance insights and trends across all grades.',
    image: '/resources/Community-Home.jpg',
    badge: 'Reports',
  },
  {
    title: 'Homework Tracker',
    desc: 'Track, assign, and review homework with ease.',
    image: '/resources/Community-Posts2.jpg',
    badge: 'Assignments',
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    if (index === activeIndex) return 'center';
    if ((index + 1) % cards.length === activeIndex) return 'left';
    if ((index - 1 + cards.length) % cards.length === activeIndex) return 'right';
    return 'hidden';
  };

  return (
    <div className="relative z-10 w-full max-w-[520px] h-[400px] md:h-[500px] overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {cards.map((card, index) => {
          const position = getPosition(index);

          let baseStyle = 'absolute top-0 transition-all duration-700 ease-in-out';

          let scale = 0.85;
          let translateX = 'translate-x-0';
          let zIndex = 10;
          let opacity = 0;

          if (position === 'center') {
            scale = 1;
            translateX = 'translate-x-0';
            zIndex = 30;
            opacity = 1;
          } else if (position === 'left') {
            translateX = '-translate-x-[120%] md:-translate-x-[80%]';
            zIndex = 20;
            opacity = 0.5;
          } else if (position === 'right') {
            translateX = 'translate-x-[120%] md:translate-x-[80%]';
            zIndex = 20;
            opacity = 0.5;
          }

          return (
            <motion.div
              key={index}
              className={`${baseStyle} w-[85%] max-w-[380px] mx-auto ${translateX}`}
              style={{ scale, zIndex, opacity }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-purple-300 transition-shadow duration-300 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-2 right-2 z-20 bg-white px-3 py-1 rounded-full shadow text-sm font-medium text-purple-600 flex items-center gap-2">
                  <PieChart className="w-4 h-4" />
                  {card.badge}
                </div>

                <div className="w-full aspect-[16/9] relative bg-white p-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>

                <div className="p-5 space-y-1">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
