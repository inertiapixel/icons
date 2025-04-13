import React from "react";

export const ToiletPaperOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61494)">
<path d="M4.27 4.28125C3.502 5.55125 3 7.64025 3 10.0012C3 13.8672 4.343 17.0012 6 17.0012C7.657 17.0012 9 13.8672 9 10.0012C9 9.66125 8.99 9.32925 8.97 9.00125"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10C21 6.134 19.657 3 18 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 3H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10V17M19.487 19.496L18 19L15 21L12 18L9 20V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10H6.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61494">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
