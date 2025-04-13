import React from "react";

export const CircuitResistorIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78745)">
<path d="M2 12H4L6 7L9 17L12 7L15 17L18 7L19.5 12H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78745">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
