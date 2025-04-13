import React from "react";

export const SatelliteIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64622)">
<path d="M3.70685 6.29285L6.29285 3.70685C6.48038 3.51938 6.73468 3.41406 6.99985 3.41406C7.26501 3.41406 7.51932 3.51938 7.70685 3.70685L13.2928 9.29285C13.4803 9.48038 13.5856 9.73468 13.5856 9.99985C13.5856 10.265 13.4803 10.5193 13.2928 10.7068L10.7068 13.2928C10.5193 13.4803 10.265 13.5856 9.99985 13.5856C9.73468 13.5856 9.48038 13.4803 9.29285 13.2928L3.70685 7.70685C3.51938 7.51932 3.41406 7.26501 3.41406 6.99985C3.41406 6.73468 3.51938 6.48038 3.70685 6.29285Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10L3 13L6 16L9 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6L13 3L16 6L13 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L13.5 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 17C15.163 17 15.7989 16.7366 16.2678 16.2678C16.7366 15.7989 17 15.163 17 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 21C16.5913 21 18.1174 20.3679 19.2426 19.2426C20.3679 18.1174 21 16.5913 21 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64622">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
