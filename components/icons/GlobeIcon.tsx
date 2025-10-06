import React from 'react';

interface GlobeIconProps {
  className?: string;
}

const GlobeIcon: React.FC<GlobeIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21v-4.5m0 0V5.25M12 16.5V9M12 16.5h3.375M12 16.5H8.625m0 0L12 9m2.625 7.5L12 9m0 0L8.625 7.5M12 9v-4.5m0 0H8.625m3.375 0H15"
    />
  </svg>
);

export default GlobeIcon;