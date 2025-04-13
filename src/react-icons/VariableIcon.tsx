import React from "react";

export const VariableIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60467)">
<path d="M5 4C2.5 9 2.5 14 5 20M19 4C21.5 9 21.5 14 19 20M9 9H10C11 9 11 10 12.016 12.527C13 15 13 16 14 16H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16C9.5 16 11 14 12 12.5C13 11 14.5 9 16 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60467">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
