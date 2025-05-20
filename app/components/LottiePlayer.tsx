'use client';

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottiePlayerProps {
  animationData: any;
  loop?: boolean;
  className?: string;
}

const LottiePlayer = ({ animationData, loop = true, className = '' }: LottiePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay: true,
        animationData,
      });
    }

    return () => {
      animationInstance.current?.destroy();
    };
  }, [animationData, loop]);

  return <div ref={containerRef} className={className} />;
};

export default LottiePlayer;
