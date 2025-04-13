import React from "react";

export const ArrowLeftSquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85341)">
<path d="M17 12H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9L3 12L6 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14H17V10H21V14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85341">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
