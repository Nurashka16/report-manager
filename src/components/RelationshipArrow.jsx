// src/components/RelationshipArrow.jsx
import React from 'react';

const RelationshipArrow = () => {
  return (
    <div className="flex items-center mx-4 w-32 self-center">
      <div className="text-gray-500 text-sm mr-2">1</div>
      <div className="relative flex-grow h-0.5 bg-gray-400">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-gray-400 border-b-4 border-b-transparent"></div>
      </div>
      <div className="text-gray-500 text-sm ml-2">∞</div>
    </div>
  );
};

export default RelationshipArrow;