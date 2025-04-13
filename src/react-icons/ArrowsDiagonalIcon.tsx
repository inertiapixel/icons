import React from "react";

export const ArrowsDiagonalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84994)">
<path d="M16 4H20V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10L20 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 20H4V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20L10 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84994">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
