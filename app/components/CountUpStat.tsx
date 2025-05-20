'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'countup.js';

type CountUpStatProps = {
  end: number;
  suffix?: string;
};

export default function CountUpStat({ end, suffix = '' }: CountUpStatProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated && spanRef.current) {
      const countUp = new CountUp(spanRef.current, end, {
        duration: 3,
        suffix,
      });

      if (!countUp.error) {
        countUp.start(() => {
          console.log('🚀 CountUp animation completed');
        });
        setHasAnimated(true);
      } else {
        console.error(countUp.error);
      }
    }
  }, [inView, end, suffix, hasAnimated]);

  // Merge inView and span ref
  function setRefs(el: HTMLSpanElement) {
    spanRef.current = el;
    inViewRef(el);
  }

  return <span ref={setRefs}>0</span>;
}
