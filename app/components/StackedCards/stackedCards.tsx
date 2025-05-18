'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const initialCards = [
  {
    image: '/resources/Dashboard.jpg',
    title: 'Dashboard',
    description: 'Visualize your progress and performance.',
  },
  {
    image: '/resources/Community-Home.jpg',
    title: 'Community Hub',
    description: 'Engage with learners and educators in one place.',
  },
  {
    image: '/resources/Community-Posts2.jpg',
    title: 'Discussions',
    description: 'Meaningful topic-based interactions.',
  },
  {
    image: '/resources/Community-Shorts.jpg',
    title: 'Shorts',
    description: 'Quick bursts of micro-learning.',
  },
  {
    image: '/resources/Products-Exams.jpg',
    title: 'Mock Exams',
    description: 'Simulate real test environments.',
  },
  {
    image: '/resources/Products-TestSeries.jpg',
    title: 'Test Series',
    description: 'Track learning through structured assessments.',
  },
  
];

const StackedCards: React.FC = () => {
  const [cards, setCards] = useState(initialCards);

  const handleCardClick = () => {
    const updatedCards = [...cards];
    const firstCard = updatedCards.shift();
    if (firstCard) updatedCards.push(firstCard);
    setCards(updatedCards);
  };

  const activeCard = cards[0];

  return (
    <div
      className="flex flex-col justify-center items-center mt-6 sm:mt-10 relative w-full min-h-[350px]"
      role="button"
      aria-label="Rotate stacked card images"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      {/* Shadow below the stack */}
      <div className="absolute w-full max-w-[300px] sm:max-w-[350px] h-[25px] bg-black opacity-30 blur-md rounded-full -bottom-6 z-0" />

      <div
        className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] xl:max-w-[500px] h-[200px] sm:h-[240px] md:h-[280px] cursor-pointer"
        onClick={handleCardClick}
      >
        {cards.slice(0, 5).map((card, index) => (
          <motion.div
            key={card.image}
            className="absolute inset-0"
            initial={{
              x: index * 10,
              y: index * 6,
              scale: 1 - index * 0.04,
              rotate: index * 1.5,
            }}
            animate={{
              x: index * 10,
              y: index * 6,
              scale: 1 - index * 0.04,
              rotate: index * 1.5,
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ zIndex: cards.length - index }}
          >
            <Image
              src={card.image}
              alt={`Card ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
              className="rounded-lg shadow-lg object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Active card info */}
      <div className="mt-6 text-center max-w-md px-4">
        <h3 className="text-lg font-semibold text-white">{activeCard.title}</h3>
        <p className="text-sm text-white/80 mt-1">{activeCard.description}</p>
        <p className="mt-3 text-sm text-white opacity-60">Click to explore</p>
      </div>
    </div>
  );
};

export default StackedCards;
