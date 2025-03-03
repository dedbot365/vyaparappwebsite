import React from 'react';

const Tab2 = ({ isSelected, label, onClick }) => (
  <div
    className={`tab cursor-pointer p-2 rounded-md ${
      isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
    }`}
    onClick={onClick}
  >
    {label}
  </div>
);

export default Tab2;
