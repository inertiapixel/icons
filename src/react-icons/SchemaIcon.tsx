import React from "react";

export const SchemaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64551)">
<path d="M5 2H10V6H5V2Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H20V14H15V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18H10V22H5V18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 10H10V14H5V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 6V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 14V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64551">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
