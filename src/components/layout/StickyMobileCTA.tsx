import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling down a bit (past hero usually)
      if (window.scrollY > 400 && window.innerWidth < 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-gray-100 md:hidden"
        >
          {/* TODO: Update Line URL */}
          <a
            href="https://line.me/"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-bold text-lg rounded-full shadow-lg"
          >
            💬 คุยกับพี่สกุณาเลย
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
