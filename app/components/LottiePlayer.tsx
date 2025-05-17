'use client';

import Lottie from 'lottie-react';

type LottiePlayerProps = {
  animationData: object;
};

export default function LottiePlayer({ animationData }: LottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop
      className="w-full h-full max-w-md"
    />
  );
}
