'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, imageSrc, tags, liveUrl, githubUrl }: ProjectProps) {
  return (
    <motion.div 
      className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-full flex flex-col relative group"
      whileHover={{ 
        y: -8,
        boxShadow: '0 0 60px -10px rgba(255, 0, 255, 0.6), 0 0 40px -10px rgba(0, 255, 255, 0.4)',
        borderColor: 'rgba(255, 0, 255, 0.5)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Project Screenshot */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF00FF] group-hover:to-[#00FFFF] transition-all duration-300">{title}</h3>
        <p className="text-textSecondary mb-4 flex-grow">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            // Different colors for different tag types
            let tagColor = '';
            switch(tag.toLowerCase()) {
              case 'frontend':
                tagColor = 'bg-blue-500/20 text-blue-400';
                break;
              case 'automation':
                tagColor = 'bg-purple-500/20 text-purple-400';
                break;
              case 'api':
                tagColor = 'bg-green-500/20 text-green-400';
                break;
              case 'ui/ux':
                tagColor = 'bg-yellow-500/20 text-yellow-400';
                break;
              default:
                tagColor = 'bg-primary/10 text-primary';
            }
            
            return (
              <span 
                key={index} 
                className={`px-2 py-1 text-xs rounded font-medium ${tagColor}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Live
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-background border border-gray-700 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}