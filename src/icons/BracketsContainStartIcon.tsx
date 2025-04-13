import React from "react";

export const BracketsContainStartIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82921)">
<path d="M9 4H5V20H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9983 16H17.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.9983 16H13.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99828 16H9.98828"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82921">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
