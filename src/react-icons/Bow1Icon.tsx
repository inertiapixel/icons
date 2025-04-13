import React from "react";

export const Bow1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83177)">
<path d="M17 3H21V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3L6 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18H6V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 20C18.076 18.424 19 15.905 19 13.5C19 8.69 15.31 5 10.5 5C8.085 5 5.578 5.913 4 7.5L16.5 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83177">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
