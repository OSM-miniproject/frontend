'use client';

import { useRouter } from 'next/navigation';

const Resources = () => {
  const router = useRouter();

  const resources = [
    {
      label: 'Symptoms',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      image: '/images/symptoms.png', // Replace with your image path
      route: '/resources/symptoms',
    },
    {
      label: 'Treatment',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      image: '/images/treatment.png', // Replace with your image path
      route: '/resources/treatment',
    },
    {
      label: 'What is OCD?',
      bgColor: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      image: '/images/whatisocd.png', // Replace with your image path
      route: '/resources/whatisocd',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.label}
            className="flex items-center space-x-4 p-4 border rounded-lg shadow-lg"
          >
            <img
              src={resource.image}
              alt={resource.label}
              className="w-12 h-12 object-cover"
            />
            <button
              className={`flex-1 px-4 py-2 ${resource.bgColor} text-white rounded ${resource.hoverColor}`}
              onClick={() => router.push(resource.route)}
            >
              {resource.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
