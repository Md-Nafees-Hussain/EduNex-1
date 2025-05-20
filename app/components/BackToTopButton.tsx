'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const container = document.body;

  const toggleVisibility = () => {
    setVisible(container.scrollTop > 400); // instead of window.scrollY
  };

  container.addEventListener('scroll', toggleVisibility);
  return () => container.removeEventListener('scroll', toggleVisibility);
}, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    style={{
      position: 'fixed',
      bottom: '40px',
      right: '40px',
      zIndex: 9999,
      backgroundColor: 'red',
      color: 'white',
      padding: '16px',
      borderRadius: '9999px',
      fontSize: '20px',
    }}
  >
    ↑
  </button>
  );
}
