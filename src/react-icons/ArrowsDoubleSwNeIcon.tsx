import React from "react";

export const ArrowsDoubleSwNeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84962)">
<path d="M14 3L3 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10V14H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10H21V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21L21 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84962">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
