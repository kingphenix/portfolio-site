import React from 'react';
import Image from 'next/image';

interface StackBadgeProps {
  src: string;
  alt: string;
}

const StackBadge: React.FC<StackBadgeProps> = ({ src, alt }) => (
  <div className="flex flex-col items-center p-2 bg-gray-800 rounded-lg shadow-md">
    <Image src={src} alt={alt} width={40} height={40} className="mb-2" />
    <span className="text-xs text-textSecondary">{alt}</span>
  </div>
);

const StackBadges: React.FC = () => {
  const stackItems = [
    { src: '/icons/javascript.svg', alt: 'JavaScript' },
    { src: '/icons/typescript.svg', alt: 'TypeScript' },
    { src: '/icons/react.svg', alt: 'React' },
    { src: '/icons/nextjs.svg', alt: 'Next.js' },
    { src: '/icons/tailwindcss.svg', alt: 'Tailwind CSS' },
    { src: '/icons/framer-motion.svg', alt: 'Framer Motion' },
    { src: '/icons/bootstrap.svg', alt: 'Bootstrap' },
    { src: '/icons/nodejs.svg', alt: 'Node.js' },
    { src: '/icons/git.svg', alt: 'Git' },
    { src: '/icons/docker.svg', alt: 'Docker' },
    { src: '/icons/aws.svg', alt: 'AWS' },
  ];

  return (
    <div className="mt-6">
      <h4 className="text-xl font-semibold mb-4">My Stack</h4>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {stackItems.map((item) => (
          <StackBadge key={item.alt} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default StackBadges;