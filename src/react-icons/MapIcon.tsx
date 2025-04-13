import React from "react";

export const MapIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69300)">
<path d="M3 7L9 4L15 7L21 4V17L15 20L9 17L3 20V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69300">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
