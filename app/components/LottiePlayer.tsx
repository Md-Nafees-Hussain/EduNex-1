'use client';
import { useRef, useEffect } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface Props {
  animationData: any;
  loop?: boolean;
  className?: string;
}

const LottiePlayer = ({ animationData, loop = true, className = '' }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay: true,
        animationData,
      });
    }
    return () => animationRef.current?.destroy();
  }, [animationData, loop]);

  return <div ref={containerRef} className={className} />;
};

export default LottiePlayer;
