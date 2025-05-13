'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Image from 'next/image';

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
      if (!slug) {
        console.warn('🚫 Slug is missing');
        return;
      }

      console.log('🔍 Slug from useParams():', slug);

      try {
        const q = query(collection(db, 'blogs'), where('slug', '==', slug));
        const snapshot = await getDocs(q);

        console.log('📦 Documents found:', snapshot.docs.length);

        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          console.log('✅ Blog post data:', data);
          setPost(data as BlogPost);
        } else {
          console.warn('⚠️ No blog post found for slug:', slug);
          setPost(undefined); // triggers "not found" view
        }
      } catch (err) {
        console.error('❌ Firestore fetch error:', err);
        setPost(undefined);
      }
    };

    fetchPost();
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
  );
}
