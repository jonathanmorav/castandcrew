
import React from 'react';

interface PartnerLogoProps {
  className?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ className = "h-12 md:h-16" }) => {
  return (
    <div className={className}>
      <svg 
        viewBox="0 0 400 100" 
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle - Green */}
        <circle 
          cx="50" 
          cy="50" 
          r="35" 
          fill="#4ADE80" 
        />
        
        {/* Inner circle - Blue */}
        <circle 
          cx="50" 
          cy="50" 
          r="15" 
          fill="#1E40AF" 
        />
        
        {/* Cakewalk Text */}
        <text 
          x="100" 
          y="65" 
          fontFamily="Space Grotesk, sans-serif" 
          fontSize="36" 
          fontWeight="600" 
          fill="#2D2D2D"
        >
          Cakewalk
        </text>
      </svg>
    </div>
  );
};

export default PartnerLogo;
