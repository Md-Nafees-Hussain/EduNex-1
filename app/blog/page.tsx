'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar/navBar';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

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
        const snapshot = await getDocs(collection(db, 'blogs'));
        const data = snapshot.docs.map((doc) => doc.data() as BlogPost);
        setBlogs(data);
      } catch (error) {
        console.error('❌ Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center">Blog & Insights</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-transform hover:scale-[1.01]"
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
              <div className="p-6">
                <span className="inline-block text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-2">
                  {blog.category}
                </span>
                <p className="text-sm text-gray-400">{blog.date}</p>
                <h2 className="text-xl font-semibold mt-1 text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.summary}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-sm text-blue-600 mt-4 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
