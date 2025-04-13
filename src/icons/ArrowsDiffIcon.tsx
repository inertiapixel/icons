import React from "react";

export const ArrowsDiffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84986)">
<path d="M11 16H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16L15 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16L15 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8L9 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8L9 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84986">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
