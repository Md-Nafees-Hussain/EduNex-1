'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/navbar/navBar';
import Footer from '../../components/footer';

// ✅ Local mock — can be swapped with Firestore
const mockClientData: Record<string, {
  name: string;
  quote: string;
  role: string;
  logo: string;
  description: string;
}> = {
  'horizon-international': {
    name: 'Horizon International',
    quote: 'EduNex helped us digitize classrooms and boost parent involvement.',
    role: 'Principal, Grade 6–12',
    logo: '/resources/logos/horizon.svg',
    description:
      'Horizon transformed digital education by integrating EduNex’s real-time tools into everyday teaching.',
  },
  'greenfield-public': {
    name: 'Greenfield Public School',
    quote: 'The real-time performance tracking changed how we teach.',
    role: 'Academic Director',
    logo: '/resources/logos/greenfield.svg',
    description:
      'Greenfield adopted EduNex to modernize assessment and reporting.',
  },
  'nextgen-academy': {
    name: 'NextGen Academy',
    quote: 'Our teachers now save hours every week using EduNex tools.',
    role: 'Tech Coordinator',
    logo: '/resources/logos/nextgen.svg',
    description:
      'NextGen streamlined workflows and improved accountability.',
  },
};

export default function ClientSlugPage() {
  const { slug } = useParams();
  const [client, setClient] = useState<typeof mockClientData[string] | null>(null);

  useEffect(() => {
    if (typeof slug === 'string') {
      const data = mockClientData[slug];
      setClient(data ?? null);
    }
  }, [slug]);

  if (!client) return notFound();

  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-4xl mx-auto text-center">
        <Image
          src={client.logo}
          alt={client.name}
          width={100}
          height={100}
          className="mx-auto mb-6 object-contain h-20 w-auto"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{client.name}</h1>
        <p className="text-gray-600 italic mb-6 text-base md:text-lg">
          &ldquo;{client.quote}&rdquo;
        </p>
        <p className="text-sm text-gray-500 mb-6">{client.role}</p>
        <p className="text-lg text-gray-700 leading-relaxed">{client.description}</p>
      </main>

      <Footer />
    </>
  );
}
