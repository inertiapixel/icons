import React from "react";

export const TypographyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60813)">
<path d="M4 20H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.89844 15H13.7984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1992 6.30078L15.9992 20.0008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 20L11 4H13L20 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60813">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
