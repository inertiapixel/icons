import React from "react";

export const ListIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70331)">
<path d="M9 6H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 6V6.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70331">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
