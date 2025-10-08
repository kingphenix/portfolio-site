'use client';

import { useEffect, useState } from 'react';
import { Grenze_Gotisch } from 'next/font/google';

const gotisch = Grenze_Gotisch({ subsets: ['latin'], weight: ['400'], variable: '--font-gotisch' });
import Link from 'next/link';
import { NeonLink } from '@/components/ui/neon-link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollY;
      // Hide on scroll down, show on scroll up. Keep visible if mobile menu is open.
      if (!isOpen) {
        setIsHidden(isScrollingDown && currentY > 10);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 bg-black/20 backdrop-blur-xl py-4 border-b border-white/10 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${gotisch.className}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        <Link href="/" className="text-4xl font-bold gradient-text text-white">Pheenix</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <NeonLink 
              key={item.name} 
              href={item.path}
              className="text-xl text-white"
              variant="ghost"
              size="sm"
            >
              {item.name}
            </NeonLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text focus:outline-none text-white" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className="md:hidden overflow-hidden bg-black/50 backdrop-blur-2xl border-t border-white/10"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <NeonLink 
              key={item.name} 
              href={item.path}
              className="text-xl text-white"
              variant="ghost"
              size="default"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NeonLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;