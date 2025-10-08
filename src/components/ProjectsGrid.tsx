'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectProps } from './ProjectCard';

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Load projects from public JSON
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch('/data/projects.json', { cache: 'force-cache' });
        if (!res.ok) throw new Error('Failed to load projects.json');
        const data = await res.json();
        if (mounted) setProjects(data as ProjectProps[]);
      } catch (e: any) {
        if (mounted) setError(e?.message ?? 'Failed to load projects');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
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
        setCurrentIndex((i) => i + 1);
      }
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      if (currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      }
    }
  };

  // Navigation buttons for mobile
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };
  
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
  
  if (loading) {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 rounded-lg bg-white/5 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-400">{error}</div>;
  }

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