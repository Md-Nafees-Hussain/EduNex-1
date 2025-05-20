'use client';

import clsx from 'clsx';

type SectionDividerProps = {
  position?: 'top' | 'bottom';
  variant?: 'wave' | 'tilt';
  color?: string;
  flip?: boolean;
};

export default function SectionDivider({
  position = 'bottom',
  variant = 'wave',
  color = '#ffffff',
  flip = false,
}: SectionDividerProps) {
  const isTop = position === 'top';

  return (
    <div
      className={clsx(
        'w-full overflow-hidden leading-none',
        isTop ? '-mt-1' : 'mt-20 -mb-1',
        flip && 'rotate-180'
      )}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[80px]"
      >
        {variant === 'wave' && (
          <path
            d="M0,32 C360,100 1080,0 1440,80 L1440,0 L0,0 Z"
            fill={color}
          />
        )}
        {variant === 'tilt' && (
          <path
            d="M0,100 L1440,0 L1440,100 L0,100 Z"
            fill={color}
          />
        )}
      </svg>
    </div>
  );
}
