import React from "react";

export const CarCrashIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80086)">
<path d="M8 17C8 17.5304 8.21071 18.0391 8.58579 18.4142C8.96086 18.7893 9.46957 19 10 19C10.5304 19 11.0391 18.7893 11.4142 18.4142C11.7893 18.0391 12 17.5304 12 17C12 16.4696 11.7893 15.9609 11.4142 15.5858C11.0391 15.2107 10.5304 15 10 15C9.46957 15 8.96086 15.2107 8.58579 15.5858C8.21071 15.9609 8 16.4696 8 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11L7 6H3M11 11H12C12.5304 11 13.0391 11.2107 13.4142 11.5858C13.7893 11.9609 14 12.4696 14 13V17H12M11 11H3M8 17H3M5 11V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 15.5L19 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 8.5L19 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80086">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
