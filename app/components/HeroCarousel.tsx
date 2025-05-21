'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '../lib/utils';

const slides = [
  {
    title: 'All-in-One Control Dashboard',
    desc: 'Real-time insights for growth',
    image: '/resources/Dashboard.jpg',
  },
  {
    title: 'Community Dashboard',
    desc: 'Boost engagement with tools',
    image: '/resources/Community-Home.jpg',
  },
  {
    title: 'Community Posts Center',
    desc: 'See All Your Community Activities',
    image: '/resources/Community-Posts2.jpg',
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setActive(index);
    clearInterval(autoSlideRef.current!);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Carousel Track */}
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${active * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === active;
          const isPrev = index === (active - 1 + slides.length) % slides.length;
          const isNext = index === (active + 1) % slides.length;

          return (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center px-2"
              style={{ width: `${100 / slides.length}%` }}
            >
              <motion.div
                className={cn(
                  ' w-full sm:w-[85%] max-w-md transition-all rounded-xl',
                  isActive
                    ? 'scale-100 opacity-100 z-30'
                    : isPrev || isNext
                    ? 'scale-90 opacity-50 z-20'
                    : 'scale-75 opacity-0 z-10 hidden sm:block'
                )}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0px 6px 18px rgba(128, 90, 213, 0.25)',
                }}
              >
                <div className="w-full h-48 sm:h-60 relative mb-4">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="rounded-xl object-contain"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                {/* Slide-in Text Animation */}
                <motion.div
                  key={isActive ? 'active-text' : `inactive-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 text-center">{slide.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{slide.desc}</p>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={cn(
              'w-3 h-3 rounded-full transition-all',
              active === i ? 'bg-purple-600 scale-110' : 'bg-gray-400'
            )}
          />
        ))}
      </div>
    </div>
  );
}
