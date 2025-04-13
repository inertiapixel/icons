import React from "react";

export const PrisonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65760)">
<path d="M18 4V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 4V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 4V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 4V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 9H5V15H11V9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99828 12H7.98828"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65760">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
