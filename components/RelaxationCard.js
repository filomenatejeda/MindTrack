// components/RelaxationCard.js
import React from 'react';
import Link from 'next/link';

const RelaxationCard = ({ technique }) => {
  return (
    <Link href={technique.link} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105">
        <img src={technique.image} alt={technique.title} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-lg font-semibold mt-2">{technique.title}</h2>
        <p className="text-gray-600">{technique.description}</p>
      </div>
    </Link>
  );
};

export default RelaxationCard;
