'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectProps } from './ProjectCard';

// Sample project data
const projects: ProjectProps[] = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A full-featured online store with cart functionality, payment processing, and admin dashboard.',
    imageSrc: '/placeholder-profile.svg', // Replace with actual project image
    tags: ['Frontend', 'API', 'UI/UX'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Workflow Automation Tool',
    description: 'Custom n8n workflows that connect various services and automate repetitive tasks.',
    imageSrc: '/placeholder-profile.svg', // Replace with actual project image
    tags: ['Automation', 'API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio site built with Next.js, Tailwind CSS, and Framer Motion.',
    imageSrc: '/placeholder-profile.svg', // Replace with actual project image
    tags: ['Frontend', 'UI/UX'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'API Integration Service',
    description: 'A service that connects multiple APIs and provides a unified interface for data access.',
    imageSrc: '/placeholder-profile.svg', // Replace with actual project image
    tags: ['API', 'Automation'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Dashboard UI',
    description: 'A clean, modern dashboard interface with interactive charts and data visualization.',
    imageSrc: '/placeholder-profile.svg', // Replace with actual project image
    tags: ['Frontend', 'UI/UX'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  },
  {
    title: 'Mobile App Prototype',
    description: 'A prototype for a mobile application with focus on user experience and clean design.',
    imageSrc: '/placeholder-profile.svg', // Replace with actual project image
    tags: ['UI/UX', 'Frontend'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  }
];

export default function ProjectsGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Handle touch events for swiping on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      if (currentIndex < projects.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };
  
  // Navigation buttons for mobile
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  return (
    <div className="w-full">
      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      
      {/* Mobile Swipeable View */}
      <div 
        className="md:hidden w-full overflow-hidden"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {/* Mobile Navigation Indicators */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-4' : 'bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Mobile Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button 
            onClick={goToPrevious} 
            disabled={currentIndex === 0}
            className={`p-2 rounded-full ${currentIndex === 0 ? 'text-gray-600' : 'text-primary'}`}
            aria-label="Previous project"
          >
            ← Previous
          </button>
          <button 
            onClick={goToNext} 
            disabled={currentIndex === projects.length - 1}
            className={`p-2 rounded-full ${currentIndex === projects.length - 1 ? 'text-gray-600' : 'text-primary'}`}
            aria-label="Next project"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}