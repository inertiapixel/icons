import React from "react";

export const ArrowRightSquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85176)">
<path d="M7 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15L21 12L18 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10H7V14H3V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85176">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
