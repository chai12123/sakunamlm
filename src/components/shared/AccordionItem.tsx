import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function AccordionItem({ title, isOpen, onClick, children }: Props) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-lg text-navy-900">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-navy-500"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-gray-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
