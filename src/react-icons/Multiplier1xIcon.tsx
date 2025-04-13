import React from "react";

export const Multiplier1xIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67886)">
<path d="M9 16V8L7 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 16L17 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16L13 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67886">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
