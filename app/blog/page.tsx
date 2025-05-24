'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/navbar/navBar';
import Footer from '@/app/components/footer';
import { motion } from 'framer-motion';

type BlogPost = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  category: string;
  image?: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'blogs'));
        const data = snapshot.docs.map((doc) => doc.data() as BlogPost);
        setBlogs(data);
      } catch (error) {
        console.error('❌ Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];

  const filteredBlogs = blogs.filter(blog =>
    (selectedCategory === 'All' || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     blog.summary.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-purple-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <nav className="text-sm text-purple-600 font-medium" aria-label="Breadcrumb">
              <ol className="list-reset flex space-x-2">
                <li>
                  <Link href="/" className="hover:underline">Home</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-purple-700 font-semibold">
                  Blog
                </li>
              </ol>
            </nav>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Insights & Stories from the EduNex Team
            </h1>
            <p className="text-gray-700 text-base md:text-lg">
              Stay updated with educational innovation, classroom strategies, and digital learning trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10">
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-sm rounded-full border transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        {filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts match your search.</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, i) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out will-change-transform flex flex-col overflow-hidden"
              >
                {blog.image && (
                  <div className="w-full h-48 relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-t-2xl"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2 p-5 flex-1">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-600 font-medium px-2 py-0.5 rounded-full text-[11px]">
                      {blog.category}
                    </span>
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3">{blog.summary}</p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-auto text-sm text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
