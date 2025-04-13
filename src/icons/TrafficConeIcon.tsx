import React from "react";

export const TrafficConeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61201)">
<path d="M4 20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.39844 10H14.5984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.80078 15H16.2008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 20L11 5H13L18 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61201">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
