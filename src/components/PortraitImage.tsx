'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PortraitImage() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Purple glow effect */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform scale-105 z-0"></div>
      
      {/* Portrait container with border */}
      <motion.div 
        className="relative z-10 bg-background rounded-full border border-primary/30 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Black and white portrait image */}
        <div className="aspect-square relative overflow-hidden rounded-full">
          <Image 
            src="/Portfolio-img.JPG" 
            alt="Portrait" 
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            style={{ 
              filter: 'contrast(1.1) brightness(0.9)'
            }}
          />
          
          {/* Purple accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-40 mix-blend-overlay"></div>
        </div>
      </motion.div>
    </div>
  );
}