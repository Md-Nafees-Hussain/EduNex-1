'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const stats = [
  { label: 'Platform Growth', value: 3, suffix: 'x in 12 months' },
  { label: 'States Reached', value: 15, suffix: '+' },
  { label: 'Solutions Delivered', value: 25, suffix: '+' },
  { label: 'Partner Satisfaction', value: 98, suffix: '%' },
];

const Counter: FC<{ value: number; suffix?: string }> = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplay(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
};

const ImpactStats: FC = () => {
  return (
    <section className="bg-[#f8fafc] py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Impact at a Glance</h2>
      <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-xl mx-auto">
        Numbers that reflect our commitment to transforming education through innovation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-extrabold text-blue-600 mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-gray-700 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
