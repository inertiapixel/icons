import React from "react";

export const ArrowsDoubleNeSwIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84980)">
<path d="M3 14L14 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3H14V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17V21H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10L10 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84980">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
