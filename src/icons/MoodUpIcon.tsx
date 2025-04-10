import React from "react";

export const MoodUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68019)">
<path d="M20.984 12.5359C21.0927 10.7141 20.6449 8.90222 19.7001 7.34074C18.7552 5.77925 17.358 4.54193 15.6937 3.79289C14.0294 3.04386 12.1767 2.81852 10.3814 3.14676C8.58603 3.475 6.93292 4.34131 5.64132 5.63078C4.34971 6.92024 3.48066 8.57192 3.14945 10.3667C2.81824 12.1615 3.04051 14.0146 3.78679 15.6801C4.53307 17.3456 5.76808 18.7449 7.32799 19.6924C8.88791 20.6398 10.699 21.0906 12.521 20.9849" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 16L16 19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H9.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15C10.158 15.64 11.06 16 12 16C12.94 16 13.842 15.64 14.5 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68019">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
