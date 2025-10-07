import { useLottie } from 'lottie-react';
import React from 'react';

interface LottieAnimationProps {
  animationData: any;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, className }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const { View } = useLottie(options);

  return <div className={className}>{View}</div>;
};

export default LottieAnimation;