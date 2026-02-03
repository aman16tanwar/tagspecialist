'use client';

interface LogoProps {
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark';
  className?: string;
  size?: number;
}

const Logo = ({ variant = 'full', theme = 'dark', className = '', size }: LogoProps) => {
  const defaultSize = variant === 'full' ? 50 : 40;
  const actualSize = size ?? defaultSize;

  const colors = {
    navy: '#0A1A2F',
    orange: '#F97316',
    white: '#FFFFFF',
  };

  const bracketColor = theme === 'light' ? colors.white : colors.navy;
  const textColor = theme === 'light' ? colors.white : colors.navy;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={actualSize}
        height={actualSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="TagSpecialist Icon"
      >
        {/* Left bracket - Navy */}
        <path
          d="M35 25H20C17.2386 25 15 27.2386 15 30V70C15 72.7614 17.2386 75 20 75H35"
          stroke={bracketColor}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right bracket - Navy */}
        <path
          d="M65 75H80C82.7614 75 85 72.7614 85 70V30C85 27.2386 82.7614 25 80 25H65"
          stroke={bracketColor}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Slash - Orange (the distinctive accent) */}
        <line
          x1="43" y1="70"
          x2="57" y2="30"
          stroke={colors.orange}
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col justify-center">
          <span
            className="font-extrabold text-3xl leading-none tracking-tighter"
            style={{ fontFamily: 'Montserrat, sans-serif', color: textColor }}
          >
            TagSpecialist
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
