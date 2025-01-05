import React from 'react';

const FeatureCard = ({ imageUrl, title, altText, bgColor = 'bg-[#f4fbff]' }) => (
  <div className={`rounded-2xl p-6 ${bgColor} flex flex-col items-center`}>
    <img
      src={imageUrl}
      alt={altText}
      className="w-30 h-30 object-cover mb-4"
      style={{ width: '120px', height: '120px' }}
    />
    <h5 className="text-center text-lg font-medium capitalize">{title}</h5>
  </div>
);

export default FeatureCard;
