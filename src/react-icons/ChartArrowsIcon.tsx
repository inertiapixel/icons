import React from "react";

export const ChartArrowsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79748)">
<path d="M3 18H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9L12 12L9 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 15L17 18L14 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 3L21 6L18 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79748">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
