import React from 'react';

// Reusable FeatureRow Component
const FeatureRow = ({ label, basicValue, advancedValue, isHighlighted }) => {
    return (
      <div className="flex border-t-2 border-gray-200 mb-0 gap-0">
        {/* Feature Label */}
        <div className="flex-1 flex items-center px-2 py-3">
          <p className="text-left mb-0 p-0 text-sm">{label}</p>
        </div>
        
        {/* Basic Value */}
        <div className="flex-1 flex items-center justify-center px-2 py-3">
          {typeof basicValue === 'string' ? (
            <p className="mb-0 p-0 text-sm">{basicValue}</p>
          ) : (
            <img src={basicValue} alt={label} className="w-8 h-8" />
          )}
        </div>
        
        {/* Advanced Value */}
        <div className={`flex-1 flex items-center justify-center px-2 py-3 ${isHighlighted ? 'bg-red-100 border-col-diff' : ''}`}>
          {typeof advancedValue === 'string' ? (
            <p className="mb-0 p-0 text-orange-600 font-bold">{advancedValue}</p>
          ) : (
            <img src={advancedValue} alt={label} className="w-8 h-8" />
          )}
        </div>
      </div>
    );
  };

export default FeatureRow;
