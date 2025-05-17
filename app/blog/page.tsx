"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navBar";
import Footer from "../components/footer";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));
        const data = snapshot.docs.map((doc) => doc.data() as BlogPost);
        setBlogs(data);
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="pb-1 mt-10 px-6 md:px-12 lg:px-24 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        EduNex Blog & Insights
      </motion.h1>

  <motion.p
    className="mt-4 text-gray-600 text-base max-w-xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Explore stories and strategies shaping the future of education.
  </motion.p>
</section>


      {/* Blog Listing */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Posts</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-transform hover:scale-[1.01]"
            >
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 space-y-2">
                <span className="inline-block text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {blog.category}
                </span>
                <p className="text-sm text-gray-400">{blog.date}</p>
                <h2 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.summary}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-sm text-blue-600 mt-2 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
