import React from "react";

export const ViewportWideIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60299)">
<path d="M10 12H3M3 12L6 9M3 12L6 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 12H21M21 12L18 9M21 12L18 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6V3H21V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18V21H21V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60299">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
