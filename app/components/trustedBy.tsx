'use client';

import Image from 'next/image';

const allLogos = [
  '/resources/logos/meta.svg',
  '/resources/logos/aeromexico.svg',
  '/resources/logos/aircanada.svg',
  '/resources/logos/apachelucene.svg',
  '/resources/logos/brave.svg',
  '/resources/logos/coze.svg',
  '/resources/logos/dgraph.svg',
  '/resources/logos/hackerearth.svg',
  '/resources/logos/intermarche.svg',
  '/resources/logos/livejournal.svg',
];

export default function TrustedBySection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          Trusted by Institutions That Care About Impact
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap gap-12">
            {[...allLogos, ...allLogos].map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-[10vw] min-w-[100px] flex justify-center items-center">
                <Image
                  src={src}
                  alt={`logo-${idx}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-14 w-auto grayscale hover:grayscale-0 transition duration-300 drop-shadow-md hover:drop-shadow-lg"

                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
