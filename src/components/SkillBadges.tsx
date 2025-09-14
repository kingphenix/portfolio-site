'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadge {
  name: string;
  icon: string;
  color: string;
}

export default function SkillBadges() {
  const skills: SkillBadge[] = [
    {
      name: 'React',
      icon: '⚛️',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      name: 'Next.js',
      icon: '▲',
      color: 'bg-gray-700/30 text-gray-300'
    },
    {
      name: 'TailwindCSS',
      icon: '🌊',
      color: 'bg-cyan-500/10 text-cyan-400'
    },
    {
      name: 'n8n',
      icon: '🔄',
      color: 'bg-primary/10 text-primary'
    },
    {
      name: 'APIs',
      icon: '🔌',
      color: 'bg-green-500/10 text-green-400'
    },
    {
      name: 'GitHub',
      icon: '📊',
      color: 'bg-gray-500/10 text-gray-300'
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${skill.color} font-medium`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg">{skill.icon}</span>
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
}