'use client'
import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ActaccordianProps {
    title: string;
    children: ReactNode;
  }
  const Actaccordian: React.FC<ActaccordianProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
      <div >
        <motion.header
          initial={false}
          animate={{ backgroundColor: isOpen ? '#000' : '#fff',
          color: isOpen ? '#fff' : '#000' }}
          onClick={toggleOpen}
          className="cursor-pointer p-4 flex justify-between items-center"
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="w-6 h-6 bg-gray-200 text-black flex items-center justify-center"
          >
            {isOpen ? '-' : '+'}
          </motion.div>
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="p-4">{children}</div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    );
}

export default Actaccordian
