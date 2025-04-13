import React from "react";

export const ExposurePlus1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74725)">
<path d="M3 12H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 19V5L14 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74725">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
