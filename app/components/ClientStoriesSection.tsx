'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clientStories = [
  {
    slug: 'horizon-international',
    name: 'Horizon International',
    quote: 'EduNex helped us digitize classrooms and boost parent involvement.',
    logo: '/resources/avatars/aditi.png',
    role: 'Principal, Grade 6–12',
  },
  {
    slug: 'greenfield-public',
    name: 'Greenfield Public School',
    quote: 'The real-time performance tracking changed how we teach.',
    logo: '/resources/avatars/ravi.png',
    role: 'Academic Director',
  },
  {
    slug: 'nextgen-academy',
    name: 'NextGen Academy',
    quote: 'Our teachers now save hours every week using EduNex tools.',
    logo: '/resources/avatars/neeraj.png',
    role: 'Tech Coordinator',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function ClientStoriesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Success Stories from Our Clients
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clientStories.map((story, idx) => (
            <motion.div
              key={story.slug}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              transition={{ ...fadeInUp.transition, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-50 rounded-xl shadow transition relative ring-1 ring-transparent hover:ring-purple-300 hover:shadow-lg"
            >
              <Link
                href={`/clients/${story.slug}`}
                className="block group p-6 h-full relative"
                aria-label={`Read full success story of ${story.name}`}
              >
                <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ring-1 ring-transparent group-hover:ring-purple-300 transition-all duration-300">
                  <Image
                    src={story.logo}
                    alt={story.name}
                    fill
                    sizes="64px"
                    className="object-cover grayscale group-hover:grayscale-0 transition"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>

                <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="text-sm text-gray-800 font-semibold">{story.name}</div>
                <div className="text-xs text-gray-500">{story.role}</div>

                {/* Slide-in CTA - fixed to bottom */}
                <div
  className="absolute bottom-6 right-6 text-sm text-purple-600 font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
>
  View Full Story →
</div>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
