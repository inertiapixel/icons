import React from "react";

export const MathEqualGreaterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69203)">
<path d="M5 18L19 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 14L19 10L5 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69203">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
