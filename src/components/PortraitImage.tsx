'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PortraitImage() {
  return (
    <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl shadow-primary/20">
      {/* Portrait image */}
      <Image 
        src="/Portfolio-img.JPG" 
        alt="Portrait" 
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        style={{ 
          filter: 'contrast(1.05) brightness(0.95)'
        }}
      />
      
      {/* Purple accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-40 mix-blend-overlay"></div>
    </div>
  );
}