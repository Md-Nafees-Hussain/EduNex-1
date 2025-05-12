'use client';

import { FC, useState } from 'react';
import {
  Star,
  StarHalf,
  Star as FilledStar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Alice Johnson',
    location: 'San Francisco',
    feedback:
      "Edunex's intuitive design and powerful tools have significantly improved our training sessions.",
    image: '/resources/neonAvatar.jpg',
    rating: 4,
    date: 'March 18, 2025',
  },
  {
    name: 'Michael Lee',
    location: 'Chicago',
    feedback:
      'We appreciate the smooth integration of Edunex with our existing systems. Highly recommended!',
    image: '/resources/neonAvatar.jpg',
    rating: 5,
    date: 'March 19, 2025',
  },
  {
    name: 'Sophia Brown',
    location: 'Boston',
    feedback:
      "The support team at Edunex is fantastic. The platform's features are user-friendly and effective.",
    image: '/resources/neonAvatar.jpg',
    rating: 3,
    date: 'March 20, 2025',
  },
];

const ClientFeedback: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-6 md:px-20 ">
      

      <h2 className="text-4xl font-bold mb-4 text-center">Client Feedback</h2>
      <p className="text-gray-600 text-base sm:text-lg mb-12 text-center max-w-2xl mx-auto">
        Discover what our clients say about our innovative education technology solutions.
      </p>

      {/* 🖥 Desktop Grid */}
      <div className="hidden md:grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const filledStars = Math.floor(testimonial.rating);
          const hasHalfStar = testimonial.rating % 1 !== 0;
          const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(filledStars)].map((_, i) => (
                  <FilledStar key={i} size={18} className="text-yellow-500 fill-current mr-1" />
                ))}
                {hasHalfStar && <StarHalf size={18} className="text-yellow-500 mr-1" />}
                {[...Array(emptyStars)].map((_, i) => (
                  <Star key={i} size={18} className="text-gray-300 mr-1" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 text-left text-base leading-relaxed">
                “{testimonial.feedback}”
              </p>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-3 text-left">
                    <h3 className="font-semibold text-gray-900 text-base">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{testimonial.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 📱 Mobile Carousel */}
      <div className="md:hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: direction === 'right' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 'right' ? -50 : 50 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <div className="flex items-center mb-4">
              {[...Array(Math.floor(testimonials[activeIndex].rating))].map((_, i) => (
                <FilledStar key={i} size={18} className="text-yellow-500 fill-current mr-1" />
              ))}
              {testimonials[activeIndex].rating % 1 !== 0 && (
                <StarHalf size={18} className="text-yellow-500 mr-1" />
              )}
              {[...Array(5 - Math.ceil(testimonials[activeIndex].rating))].map((_, i) => (
                <Star key={i} size={18} className="text-gray-300 mr-1" />
              ))}
            </div>

            <p className="text-gray-700 italic mb-6 text-left text-base leading-relaxed">
              “{testimonials[activeIndex].feedback}”
            </p>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div className="ml-3 text-left">
                  <h3 className="font-semibold text-gray-900 text-base">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">{testimonials[activeIndex].date}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Arrows */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
