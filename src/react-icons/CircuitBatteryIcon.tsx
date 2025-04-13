import React from "react";

export const CircuitBatteryIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78831)">
<path d="M2 12H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78831">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
