'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "SEO Optimization",
      description: "Enhancing your website's visibility with optimized content and meta tags for better search engine ranking.",
      moreInfo: "We use advanced tools and techniques to boost your search engine ranking and drive more organic traffic to your platform.",
      image: "/resources/OurServices-SEO.jpg",
    },
    {
      title: "Web Design",
      description: "Creating modern, responsive websites that engage users and showcase your educational offerings effectively.",
      moreInfo: "We create seamless, attractive, and user-friendly interfaces that leave lasting impressions on your audience.",
      image: "/resources/OurServices-WebDesign.jpg",
    },
    {
      title: "CMS",
      description: "Robust and customizable CMS solutions to easily manage your digital education content.",
      moreInfo: "Empower your team with intuitive tools to update content, manage users, and scale your platform seamlessly.",
      image: "/resources/OurServices-CMS.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-[#f4f8fb] text-center">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 text-center max-w-2xl mx-auto">
          Explore our innovative solutions tailored for the education technology sector to enhance learning experiences.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            tabIndex={0}
            aria-label={`Service: ${service.title}`}
          >
            <Image
              src={service.image}
              alt={`Visual representation of ${service.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index === 0}
            />

            {/* Title overlay when not active */}
            <div className={`absolute bottom-0 w-full text-center text-gray-900 bg-white bg-opacity-80 p-4 transition-all ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>

            {/* Expanded overlay */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm text-white flex flex-col justify-between items-center p-6"
                >
                  <div className="overflow-y-auto">
                    <h3 className="text-2xl font-bold mb-2">{service.title.toUpperCase()}</h3>
                    <p className="text-sm mb-4">{service.description}</p>
                    <p className="text-sm">{service.moreInfo}</p>
                  </div>
                  <div className="mt-4">
                    <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
