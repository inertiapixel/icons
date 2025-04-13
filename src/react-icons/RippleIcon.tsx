import React from "react";

export const RippleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65064)">
<path d="M3 7C6 5 9 5 12 7C15 9 18 9 21 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17C6 15 9 15 12 17C15 19 18 19 21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12C6 10 9 10 12 12C15 14 18 14 21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65064">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
