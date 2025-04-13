import React from "react";

export const ArrowsRightLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84847)">
<path d="M21 7H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 10L21 7L18 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 20L3 17L6 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84847">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
