import React from "react";

export const CircuitDiodeZenerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78781)">
<path d="M22 12H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 7L16 12L8 17V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7H16V17H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78781">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
