"use client";

import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  isShootingStar: boolean;
  length?: number;
  opacity?: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const createParticle = useCallback((isShootingStar = false): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Particle;

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = isShootingStar ? Math.random() * 3 + 1.5 : Math.random() * 1.5 + 0.5; // Adjusted size for 4-sided stars
    const color = isShootingStar ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)'; // Brighter for shooting stars

    if (isShootingStar) {
      const angle = Math.random() * Math.PI * 2; // Random direction
      const speed = Math.random() * 7 + 3; // Faster speed
      const length = Math.random() * 70 + 40; // Longer tail
      return {
        x,
        y,
        size,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        color,
        isShootingStar,
        length,
        opacity: 1,
      };
    } else {
      return {
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 0.5, // Slower, subtle movement for regular stars
        speedY: (Math.random() - 0.5) * 0.5,
        color,
        isShootingStar,
      };
    }
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

    particles.current.forEach((particle, index) => {
      if (particle.isShootingStar) {
        // Draw shooting star with a tail
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.speedX * (particle.length || 0), particle.y - particle.speedY * (particle.length || 0));
        ctx.strokeStyle = `rgba(255, 255, 255, ${particle.opacity || 1})`;
        ctx.lineWidth = particle.size;
        ctx.stroke();

        // Fade out and remove shooting stars
        if (particle.opacity !== undefined) {
          particle.opacity -= 0.01;
          if (particle.opacity <= 0) {
            particles.current.splice(index, 1);
          }
        }
      } else {
        // Draw regular star
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y - particle.size);
        ctx.lineTo(particle.x + particle.size, particle.y);
        ctx.lineTo(particle.x, particle.y + particle.size);
        ctx.lineTo(particle.x - particle.size, particle.y);
        ctx.closePath();
        ctx.fillStyle = particle.color;
        ctx.fill();
      }
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
    if (Math.random() < 0.002) { // Reduced probability of shooting stars
      particles.current.push(createParticle(true));
    }
  }, [createParticle]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    updateParticles();
    drawParticles(ctx);
    animationFrameId.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

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
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initParticles, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10"
      // Removed background: 'black' as the parent section already has a black background
    ></canvas>
  );
};

export default ParticleBackground;