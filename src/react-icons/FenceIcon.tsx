import React from "react";

export const FenceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74441)">
<path d="M4 12V16H20V12H4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16V20H10V16M10 12V6L8 4L6 6V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 16V20H18V16M18 12V6L16 4L14 6V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74441">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
