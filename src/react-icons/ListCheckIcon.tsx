import React from "react";

export const ListCheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70377)">
<path d="M3.5 5.5L5 7L7.5 4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 11.5L5 13L7.5 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 17.5L5 19L7.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 6H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 18H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70377">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
