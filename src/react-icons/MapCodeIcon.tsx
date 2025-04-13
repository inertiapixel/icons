import React from "react";

export const MapCodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69579)">
<path d="M11 18L9 17L3 20V7L9 4L15 7L21 4V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7V13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21L22 19L20 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17L15 19L17 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69579">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
