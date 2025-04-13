import React from "react";

export const ColumnsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78024)">
<path d="M4 6H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10H9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 14H9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 18H9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 6H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 10H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 14H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 18H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78024">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
