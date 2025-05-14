'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter, FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', toggleScroll);
    return () => window.removeEventListener('scroll', toggleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding + Logo */}
        <div>
          <Image
            src="/resources/EduNexLogo-white.svg"
            alt="EduNex Logo"
            width={50}
            height={50}
            className="mb-3"
          />
          <p className="text-sm text-gray-400">Empowering learning through modern tech solutions.</p>
        </div>

        {/* Sitemap Links */}
        <div>
          <h4 className="font-semibold mb-3 text-base text-white">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/clients" className="hover:underline">Clients</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3 text-base text-white">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3 text-base text-white">Subscribe</h4>
          <p className="text-gray-400 text-sm mb-4">Get the latest insights and updates from EduNex.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm rounded bg-white text-black placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} EduNex. All rights reserved.
      </div>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 p-3 rounded-full shadow-md text-white"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
