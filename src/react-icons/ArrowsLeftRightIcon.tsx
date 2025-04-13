import React from "react";

export const ArrowsLeftRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84916)">
<path d="M21 17H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10L3 7L6 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 20L21 17L18 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84916">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
