import React from "react";

export const ArrowsSortIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84825)">
<path d="M3 9L7 5M7 5L11 9M7 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15L17 19M17 19L13 15M17 19V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84825">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
