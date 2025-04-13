import React from "react";

export const DialpadOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75439)">
<path d="M7 7H3V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 3H21V7H17V3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6V3H14V7H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10H7V14H3V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13V10H21V14H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14H10V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17H14V21H10V17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75439">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
