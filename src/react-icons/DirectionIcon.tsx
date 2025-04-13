import React from "react";

export const DirectionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75337)">
<path d="M9 10L12 7L15 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14L12 17L15 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75337">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
