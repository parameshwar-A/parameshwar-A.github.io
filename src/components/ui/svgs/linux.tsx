import type { SVGProps } from "react";

const Linux = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    {/* Shadow under feet */}
    <ellipse cx="87" cy="111" rx="30" ry="15" fill="#000" opacity="0.3"/>
    <ellipse cx="41" cy="111" rx="31" ry="15" fill="#000" opacity="0.3"/>
    
    {/* Penguin body - black */}
    <path fill="#000" d="M108 81c-1.5 6.3-9.3 19.5-13.5 25.3-4.1 5.8-3.6 11.1-11.3 9-7.6-2-9.8-1.7-17.6-1.2-7.8.5-6.1-.2-11 2-4.9 2.2-21.3-26.8-22.6-32.2-1.3-5.4-1.9-4.7 1.5-10.6 3.4-5.8 3.9-11.6 8.4-18.7 4.5-7.1 9.7-10.7 9.3-16.1-1.5-20.1-2.6-30.2 6.3-34.8 8.5-4.4 15.6-1.8 18.4-.3 1.2.7 3.7 1.9 5.5 4.1 1.8 2.2 3.5 5.4 4.4 9.6 1.9 8.3-.8 5.6 1.4 15.1 2.1 9.5 6.5 14.1 11.8 21.6 5.3 7.5 10.8 19.9 9.1 27.1z"/>
    
    {/* Left eye - white with black pupil */}
    <ellipse cx="57" cy="35" rx="4" ry="5" fill="#FFF"/>
    <circle cx="57" cy="36" r="2" fill="#000"/>
    
    {/* Right eye - white with black pupil */}
    <ellipse cx="71" cy="35" rx="4" ry="5" fill="#FFF"/>
    <circle cx="71" cy="36" r="2" fill="#000"/>
    
    {/* Beak - yellow */}
    <path fill="#FCC624" d="M58 42c1.4-.6 1.2-.6 2.1-2.7.7-1.6 1.4-2.2 1.4-4.6 0-2.3-.7-3.1-1.8-4.6-1-1.4-2.7-1.5-3.8-1.3-.6.1-1.4.9-1.9 2-.3.8-.6 1.7-.7 2.8-.1 2.7.2 3.8.8 5.6.7 2.2 2.6 3.3 3.9 2.8z"/>
    
    {/* Belly - white */}
    <ellipse cx="64" cy="65" rx="18" ry="22" fill="#FFF"/>
    
    {/* Left foot - yellow */}
    <path fill="#FCC624" d="M35 100c-2 3-5 8-3 12 1 3 4 4 7 3 3-1 5-4 6-7 1-3 0-6-2-8-1-2-4-3-6-2-2 1-3 4-2 7 1 3 4 4 7 3 3-1 5-4 6-7z"/>
    
    {/* Right foot - yellow */}
    <path fill="#FCC624" d="M93 100c2 3 5 8 3 12-1 3-4 4-7 3-3-1-5-4-6-7-1-3 0-6 2-8 1-2 4-3 6-2 2 1 3 4 2 7-1 3-4 4-7 3-3-1-5-4-6-7z"/>
  </svg>
);

export { Linux };
