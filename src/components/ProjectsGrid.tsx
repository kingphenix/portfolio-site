'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectProps } from './ProjectCard';

interface ProjectsGridProps {
  projects: ProjectProps[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
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