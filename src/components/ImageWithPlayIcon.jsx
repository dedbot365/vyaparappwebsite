import React from 'react';

const ImageWithPlayIcon = ({ imageUrl, playIconUrl, altText }) => (
  <div
    className="relative w-[900px] h-[300px] bg-cover bg-center rounded-lg overflow-hidden" // Adjusted size based on your needs
    role="img"
    aria-label={altText}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {/* Play icon overlay */}
    <div
      className="absolute inset-0 flex items-center justify-center" // Centered play icon
    >
      <div
        className="play-icon w-12 h-12 bg-cover bg-center"
        role="img"
        aria-label="play-icon"
        style={{
          backgroundImage: `url(${playIconUrl})`,
          width: '50px', // Adjust size if needed
          height: '50px',
        }}
      />
    </div>
  </div>
);

export default ImageWithPlayIcon;
