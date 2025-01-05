import React from 'react';

const TabContent2 = ({ text, imageUrl, altText }) => (
  <div className="tab-content p-4">
    <p className="text-gray-700 mb-4">{text}</p>
    {imageUrl && (
      <figure className="flex justify-center">
        <img src={imageUrl} alt={altText} className="w-full max-w-lg" />
      </figure>
    )}
  </div>
);

export default TabContent2;
