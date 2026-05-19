import React from 'react';
import { motion } from 'motion/react';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgWhite?: boolean;
  bgNavy?: boolean;
}

export function SectionWrapper({ children, id, className = '', bgWhite, bgNavy }: Props) {
  let bgClass = '';
  if (bgWhite) bgClass = 'bg-white';
  if (bgNavy) bgClass = 'bg-navy-900 text-white';

  return (
    <section id={id} className={`py-16 md:py-24 overflow-hidden ${bgClass} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
