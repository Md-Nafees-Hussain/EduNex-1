'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Navbar from '@/app/components/navbar/navBar';
import Footer from '@/app/components/footer';

type BlogPost = {
  title: string;
  date: string;
  image: string;
  body: string;
};

export default function BlogPost() {
  const rawSlug = useParams().slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const [post, setPost] = useState<BlogPost | null | undefined>(null);

  useEffect(() => {
  const fetchPost = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'blogs'));
      const posts = snapshot.docs.map((doc) => doc.data());
      console.log('🔥 All posts from Firestore:', posts);

      const matched = posts.find((p: any) => p.slug === slug);
      if (matched) {
        setPost(matched as BlogPost);
      } else {
        setPost(undefined); // Triggers "Post not found"
      }
    } catch (error) {
      console.error('🔥 Firestore fetch error:', error);
      setPost(undefined);
    }
  };

  if (slug) fetchPost();
}, [slug]);



  // ⏳ Loading state
  if (post === null) {
    return <div className="p-10 text-center text-gray-500">Loading post...</div>;
  }

  // ❌ Not found
  if (post === undefined) {
    return <div className="p-10 text-center text-red-500">Post not found</div>;
  }

  // ✅ Render blog post
  return (
    <div>
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-16">
      {post.image && (
        <div className="relative w-full aspect-video mb-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, 960px"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>

      <article className="text-gray-800 leading-relaxed space-y-4">
        {post.body.split('\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </article>
    </div>
      <Footer/>
    </div>
  );
}
