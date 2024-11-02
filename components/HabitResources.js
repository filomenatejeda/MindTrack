// components/HabitResources.js
import { useState } from 'react';

export default function HabitResources({ resources }) {
  const [showResources, setShowResources] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowResources(!showResources)}
        className="text-blue-500 underline mt-2"
      >
        {showResources ? 'Ocultar recursos' : 'Ver recursos'}
      </button>
      {showResources && (
        <ul className="mt-4 space-y-2">
          {resources.map((resource, index) => (
            <li key={index} className="text-sm text-gray-700">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

