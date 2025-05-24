'use client';

import { FC, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu, UserPlus, LogIn } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV_ITEMS = ['home', 'services', 'clients', 'blog', 'contact', 'careers'];

const SOCIAL_ICONS = [
  { Icon: FaFacebook, label: 'Facebook' },
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaLinkedinIn, label: 'LinkedIn' },
  { Icon: FaXTwitter, label: 'Twitter' },
];

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const handleNavigation = (path: string) => {
    router.push(path === 'home' ? '/' : `/${path}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow backdrop-blur-md' : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Mobile Header */}
        <div className="flex items-center justify-between w-full lg:hidden relative z-50">
          <motion.button
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6 text-gray-800" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <Image
            src="/resources/EduNexLogo.svg"
            alt="EDUNEX Logo"
            width={60}
            height={60}
            priority
            className="cursor-pointer ml-auto"
            onClick={() => handleNavigation('home')}
          />
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <Image
            src="/resources/EduNexLogo.svg"
            alt="EDUNEX Logo"
            width={60}
            height={60}
            priority
            className="cursor-pointer"
            onClick={() => handleNavigation('home')}
          />

          <div className="flex items-center gap-6 ml-auto">
            {NAV_ITEMS.map((item) => {
              const path = item === 'home' ? '/' : `/${item}`;
              const isActive = pathname === path;
              return (
                <Link
                  key={item}
                  href={path}
                  className={`relative text-sm font-medium transition-all hover:text-purple-600 hover:underline ${
                    isActive ? 'text-purple-600 underline' : 'text-gray-800'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 pr-4 ml-8 mr-4">
            {SOCIAL_ICONS.map(({ Icon, label }, i) => (
              <motion.a
                key={i}
                href="#"
                aria-label={`Visit us on ${label}`}
                whileHover={{ y: -5 }}
                className="text-gray-700 hover:text-purple-600"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none overflow-hidden -z-999 rotate-180">
  <svg
    viewBox="0 0 1440 120"
    className="block w-full h-[120px]"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,20 
         C40,20 160,60 320,80 
         C640,110 1100,80 1440,40 
         L1440,120 L0,120 Z"
      fill="#F6EDFF"
    />
  </svg>
</div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white/90 backdrop-blur-xl z-40 flex flex-col w-[85%] h-full p-6 rounded-r-2xl shadow-2xl border-r border-purple-100"
          >
            <div className="flex flex-col items-start gap-6 mt-20 text-gray-900">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-lg font-semibold tracking-wide text-left hover:text-purple-600 transition-colors duration-200"
                  onClick={() => handleNavigation(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </div>

            <hr className="my-6 border-gray-300 w-full" />

            <div className="flex gap-6 text-gray-700">
              {SOCIAL_ICONS.map(({ Icon, label }, i) => (
                <motion.a
                  key={i}
                  href="#"
                  aria-label={`Visit us on ${label}`}
                  whileHover={{ y: -4 }}
                  className="hover:text-purple-600 transition"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4 mt-3 mb-2 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('signup')}
                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold tracking-wide shadow-md hover:brightness-110 transition flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Sign Up
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('login')}
                className="w-full py-2 px-4 rounded-lg bg-purple-600 text-white font-semibold tracking-wide shadow-md hover:bg-purple-700 transition flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
