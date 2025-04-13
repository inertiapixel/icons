import React from "react";

export const EmphasisIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74855)">
<path d="M16 5H8V15H16M15 10H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 20V20.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20V20.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20V20.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 20V20.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74855">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
