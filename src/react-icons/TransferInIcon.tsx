import React from "react";

export const TransferInIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61112)">
<path d="M4 18V21H20V7L12 3L4 7V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 14H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11L13 14L10 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61112">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
