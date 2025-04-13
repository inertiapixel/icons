import React from "react";

export const ArrowZigZagIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85025)">
<path d="M6 20V10L16 16V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 7L16 4L19 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85025">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
