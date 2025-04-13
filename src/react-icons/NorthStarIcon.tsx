import React from "react";

export const NorthStarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67505)">
<path d="M3 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 7.5L16.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 16.5L16.5 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67505">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
