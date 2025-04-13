import React from "react";

export const ChairDirectorIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79801)">
<path d="M6 21L18 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12L18 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 3V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 3V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 5H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79801">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
