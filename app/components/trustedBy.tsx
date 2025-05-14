'use client';

import { FC } from 'react';
import Image from 'next/image';

const allLogos = [
  '/resources/logos/meta.svg',
  '/resources/logos/aeromexico.svg',
  '/resources/logos/aircanada.svg',
  '/resources/logos/apachelucene.svg',
  '/resources/logos/brave.svg',
  '/resources/logos/coze.svg',
  '/resources/logos/hackerearth.svg',
  '/resources/logos/intermarche.svg',
  '/resources/logos/ktm.svg',
  '/resources/logos/livejournal.svg',
];


const topRowLogos = allLogos.slice(0, 5);
const bottomRowLogos = allLogos.slice(5);

const TrustedBy: FC = () => {
  return (
    <section className="bg-[#f0fdfa] py-16 px-6 md:px-20">
      <h2 className="text-center text-4xl sm:text-4xl font-bold mb-16 text-gray-800">
        Trusted by Leading Institutions
      </h2>

      <div className="overflow-hidden space-y-6">
        {/* Top Row - Scrolls Right */}
        <div className="relative w-full">
          <div className="flex animate-scroll-right gap-12 min-w-max">
            {[...topRowLogos, ...topRowLogos].map((logo, index) => (
              <div key={`top-${index}`} className="w-36 h-12 grayscale opacity-70 hover:opacity-100 transition">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={144}
                  height={48}
                  loading="lazy"
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Left */}
        <div className="relative w-full">
          <div className="flex animate-scroll-left gap-12 min-w-max">
            {[...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <div key={`bottom-${index}`} className="w-36 h-12 grayscale opacity-70 hover:opacity-100 transition">
                <Image
                  src={logo}
                  alt={`Logo ${index + 6}`}
                  width={144}
                  height={48}
                  loading="lazy"
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
