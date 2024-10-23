'use client';

import { useRouter } from 'next/navigation';

const Resources = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      <div className="flex space-x-6">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => router.push('/resources/symptoms')}
        >
          Symptoms
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => router.push('/resources/treatment')}
        >
          Treatment
        </button>
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
          onClick={() => router.push('/resources/whatisocd')}
        >
          What is OCD?
        </button>
      </div>
    </div>
  );
  
};

export default Resources;
