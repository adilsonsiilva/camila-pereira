import React from 'react';

export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.375a4.5 4.5 0 00-9 0V18m3.75-5.25h1.5m-1.5 0a6.01 6.01 0 00-1.5.189M16.5 7.5V18a2.25 2.25 0 002.25 2.25h1.375M16.5 7.5H18c2.25 0 2.25 1.5 2.25 1.5v2.758M16.5 7.5H12a9 9 0 10-3.75 7.374V18" />
</svg>
);