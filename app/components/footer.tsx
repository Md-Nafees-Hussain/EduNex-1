'use client';

import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0D1320] text-white pt-20 pb-10">
      {/* Top Curved Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] fill-white"
        >
          <path d="M0,0 C600,100 600,0 1200,100 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-2">Stay in the loop</h3>
          <p className="text-gray-400 mb-6">
            Get updates on features, tips, and new launches.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row justify-center items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="w-full sm:w-72 px-4 py-2 rounded-lg bg-white text-gray-800 border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-medium"
            >
              <Mail className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        </div>

        {/* Grid Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-800 pt-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold mb-2">EduNex</h4>
            <p className="text-sm text-gray-400 max-w-xs">
              Empowering schools with next-gen technology to simplify, scale, and succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-semibold mb-3">Resources</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-semibold mb-3">Connect With Us</h5>
            <div className="flex items-center gap-4 text-xl text-gray-400">
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white" aria-label="X (Twitter)">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-sm text-center text-gray-500 mt-12">
          © {new Date().getFullYear()} EduNex. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
