import React from 'react';

const RelaxationCard = ({ technique }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={technique.image} alt={technique.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{technique.title}</h2>
        <p className="text-gray-700 mt-2">{technique.description}</p>
      </div>
    </div>
  );
};

export default RelaxationCard;
