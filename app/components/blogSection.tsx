'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const blogs = [
  {
    title: "Benefits of EdTech in Modern Classrooms",
    slug: "benefits-of-edtech",
    summary: "How educational technology is improving student learning and engagement.",
    date: "May 10, 2025",
    category: "EdTech",
    image: "/blog/edtech-classroom.jpg",
  },
  {
    title: "Top Online Learning Tools in 2025",
    slug: "online-learning-tools-2025",
    summary: "A roundup of the most effective digital tools used in modern classrooms.",
    date: "May 3, 2025",
    category: "Tools",
    image: "/blog/learning-tools.jpg",
  },
  {
    title: "The Future of AI in Learning",
    slug: "ai-in-learning",
    summary: "Discover how artificial intelligence will transform personalized education.",
    date: "Apr 20, 2025",
    category: "AI",
    image: "/blog/edtech-classroom.jpg",
  },
  {
    title: "Gamification in eLearning",
    slug: "gamification-elearning",
    summary: "Boost engagement using gamified learning experiences.",
    date: "Apr 5, 2025",
    category: "Gamification",
    image: "/blog/learning-tools.jpg",
  },
];

const POSTS_PER_PAGE = 2;

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = blogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">Insights & Articles</h2>
          <p className="text-gray-500 mt-2">
            Explore expert views on EdTech, online learning, and more.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {visiblePosts.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-2">
                  {blog.category}
                </span>
                <p className="text-sm text-gray-400">{blog.date}</p>
                <h3 className="text-xl font-semibold mt-1 text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">{blog.summary}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-sm text-blue-600 mt-4 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="text-sm px-4 py-2 bg-gray-100 rounded-md disabled:opacity-50"
          >
            ← Previous
          </button>
          <span className="text-gray-600 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-sm px-4 py-2 bg-gray-100 rounded-md disabled:opacity-50"
          >
            Next →
          </button>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-blue-600 font-medium hover:underline"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
