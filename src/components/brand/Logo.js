import React from 'react';

/**
 * TagSpecialist Brand Logo
 * 
 * A premium, technical logo representing data engineering and tagging.
 * Concept: "Data Array" - Brackets [ ] representing code/tags, 
 * with a central node representing data/core truth.
 * 
 * @param {string} variant - 'full' (icon + text) or 'icon' (icon only)
 * @param {string} theme - 'light' (for dark backgrounds) or 'dark' (for light backgrounds)
 * @param {string} className - Additional classes
 */
const Logo = ({ variant = 'full', theme = 'dark', className = '' }) => {
  // Colors
  const colors = {
    navy: '#0A1A2F',
    graphite: '#1F2937',
    electricBlue: '#3B82F6',
    white: '#FFFFFF',
    gray: '#E5E7EB'
  };

  // Determine color based on theme (theme='dark' means dark text for light bg)
  const primaryColor = theme === 'light' ? colors.white : colors.navy;
  const secondaryColor = theme === 'light' ? colors.gray : colors.graphite;
  const accentColor = colors.electricBlue;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Symbol */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="TagSpecialist Icon"
      >
        {/* Left Bracket [ */}
        <path 
          d="M35 25H20C17.2386 25 15 27.2386 15 30V70C15 72.7614 17.2386 75 20 75H35" 
          stroke={primaryColor} 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Right Bracket ] */}
        <path 
          d="M65 75H80C82.7614 75 85 72.7614 85 70V30C85 27.2386 82.7614 25 80 25H65" 
          stroke={primaryColor} 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Central Data Node (Square with connection lines implied) */}
        <rect 
          x="42" 
          y="42" 
          width="16" 
          height="16" 
          rx="2" 
          fill={accentColor} 
        />
        
        {/* Subtle Connection Line (Data Flow) */}
        <path 
          d="M28 50H42" 
          stroke={secondaryColor} 
          strokeWidth="4" 
          strokeOpacity={theme === 'light' ? "0.5" : "0.3"}
        />
        <path 
          d="M58 50H72" 
          stroke={secondaryColor} 
          strokeWidth="4" 
          strokeOpacity={theme === 'light' ? "0.5" : "0.3"}
        />
      </svg>

      {/* Text Wordmark */}
      {variant === 'full' && (
        <div className="flex flex-col justify-center">
          <span 
            className="font-bold text-xl leading-none tracking-tight" 
            style={{ color: primaryColor, fontFamily: '"Inter", sans-serif' }}
          >
            TagSpecialist
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
