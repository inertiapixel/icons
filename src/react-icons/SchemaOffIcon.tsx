import React from "react";

export const SchemaOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64560)">
<path d="M6 2H10V6M6 6H5V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11V10H20V14H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18H10V22H5V18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 10H10V14H5V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 7.5V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 14V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64560">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
