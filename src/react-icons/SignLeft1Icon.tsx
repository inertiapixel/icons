import React from "react";

export const SignLeft1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63688)">
<path d="M16 21H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 21V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 6V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 6H8L6 8.5L8 11H18V6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63688">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
