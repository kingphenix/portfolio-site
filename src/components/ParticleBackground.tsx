"use client";

import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  const createParticle = useCallback((): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Particle;

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 1; // Regular stars
    const color = 'rgba(255, 255, 255, 0.8)'; // Regular stars color

    return {
      x,
      y,
      size,
      color,
    };
  }, []);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particles.current = [];
    const numberOfParticles = 200; // Increased number of regular stars
    for (let i = 0; i < numberOfParticles; i++) {
      particles.current.push(createParticle());
    }
  }, [createParticle]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
  }, []);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particles.current.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap particles around the canvas
      if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
      if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
      if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
      if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
    });

    // Occasionally add a shooting star
    if (Math.random() < 0.01) { // Increased probability of shooting stars
      particles.current.push(createParticle(true));
    }
  }, [createParticle]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    drawParticles(ctx);
  }, [drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); // Re-initialize particles on resize
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    initParticles();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10"
      // Removed background: 'black' as the parent section already has a black background
    ></canvas>
  );
};

export default ParticleBackground;