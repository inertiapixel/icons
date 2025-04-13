import React from "react";

export const AxisXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84595)">
<path d="M4 13V13.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 9V9.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 5V5.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 20L20 17L17 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84595">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
