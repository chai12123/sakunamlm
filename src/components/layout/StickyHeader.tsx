import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'รายได้', href: '#income' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'คำถามที่พบบ่อย', href: '#faq' },
    { name: 'ติดต่อพี่สกุณา', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className={`font-bold text-xl md:text-2xl tracking-tight ${isScrolled ? 'text-navy-900' : 'text-navy-900 drop-shadow-sm'}`}>
            SAKUNA BOYBIN
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium transition-colors hover:text-gold-500 ${isScrolled ? 'text-gray-600' : 'text-navy-900'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-navy-900 focus:outline-none p-1 bg-white/50 rounded-md backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 md:hidden flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-navy-900 border-b border-gray-100 pb-4"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8">
               {/* TODO: Update URL Line ID */}
              <a href="https://line.me/" className="block w-full py-4 text-center bg-navy-900 text-white font-bold rounded-full text-lg">
                ปรึกษาพี่สกุณา ฟรี!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
