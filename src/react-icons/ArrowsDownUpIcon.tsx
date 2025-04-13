import React from "react";

export const ArrowsDownUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84956)">
<path d="M17 3V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18L7 21L4 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 6L17 3L14 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84956">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
