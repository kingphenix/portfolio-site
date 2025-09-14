'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CodeAnimation() {
  // Animation for code blocks and automation flows
  return (
    <div className="relative w-full h-full">
      {/* Code Block Animation */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-40 bg-background border border-primary rounded-md overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          },
          opacity: { duration: 0.5 },
          x: { duration: 0.5 }
        }}
      >
        <div className="p-3">
          <div className="flex gap-1.5 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-primary/20 rounded"></div>
            <div className="h-2 w-3/4 bg-primary/30 rounded"></div>
            <div className="h-2 w-1/2 bg-primary/40 rounded"></div>
            <div className="h-2 w-5/6 bg-primary/20 rounded"></div>
            <div className="h-2 w-2/3 bg-primary/30 rounded"></div>
          </div>
        </div>
      </motion.div>

      {/* Automation Flow Animation */}
      <motion.div 
        className="absolute bottom-0 right-0 w-72 h-48 bg-background border border-accent-secondary rounded-md overflow-hidden"
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, 10, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 0.5
          },
          opacity: { duration: 0.5, delay: 0.3 },
          x: { duration: 0.5, delay: 0.3 }
        }}
      >
        <div className="p-3">
          <div className="flex justify-between items-center mb-3">
            <div className="h-5 w-20 bg-accent-secondary/30 rounded"></div>
            <div className="h-4 w-4 rounded-full bg-accent-secondary/50"></div>
          </div>
          <div className="flex justify-center items-center h-32">
            {/* Flow nodes */}
            <div className="relative w-full h-full">
              {/* Node 1 */}
              <motion.div 
                className="absolute top-2 left-4 w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/60"></div>
              </motion.div>
              
              {/* Node 2 */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent-secondary/30 flex items-center justify-center"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
              >
                <div className="w-7 h-7 rounded-full bg-accent-secondary/60"></div>
              </motion.div>
              
              {/* Node 3 */}
              <motion.div 
                className="absolute bottom-2 right-4 w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/60"></div>
              </motion.div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M14,7 L36,24 L14,41" 
                  stroke="#6C63FF" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="30"
                  animate={{ strokeDashoffset: [0, -60] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
                <motion.path 
                  d="M36,24 L58,41" 
                  stroke="#A259FF" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="30"
                  animate={{ strokeDashoffset: [0, -60] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 0.5 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}