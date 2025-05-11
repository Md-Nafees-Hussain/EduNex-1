'use client';
import { FC, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = ['home', 'services', 'clients', 'contact'];

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
      className="sticky top-0 z-50 bg-white shadow-md py-2 transition-all duration-300"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between px-4">
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
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
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
                <a
                  key={item}
                  href={path}
                  className={`cursor-pointer transition-all hover:underline ${isActive ? 'font-bold underline text-black' : 'text-gray-700'}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 pr-4 ml-12 mr-10">
            {SOCIAL_ICONS.map(({ Icon, label }, i) => (
              <motion.a
                key={i}
                href="#"
                aria-label={`Visit us on ${label}`}
                whileHover={{ y: -5 }}
                className="text-black"
              >
                <Icon className="w-6 h-6 cursor-pointer" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-blue-950/95 backdrop-blur-md z-40 flex flex-col w-[80%] h-full p-4"
          >
            <div className="flex flex-col items-start gap-4 mt-14 text-white">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="text-lg cursor-pointer hover:underline text-left"
                  onClick={() => handleNavigation(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </div>

            <div className="flex gap-6 mt-8 text-white">
              {SOCIAL_ICONS.map(({ Icon, label }, i) => (
                <motion.a
                  key={i}
                  href="#"
                  aria-label={`Visit us on ${label}`}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-7 h-7 cursor-pointer" />
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4 mt-auto mb-2 p-2 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('signup')}
                className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 w-full"
              >
                Sign Up
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('login')}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
              >
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
