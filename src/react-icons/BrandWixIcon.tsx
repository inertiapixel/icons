import React from "react";

export const BrandWixIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81154)">
<path d="M3 9.00021L4.5 15.0002L5.879 9.48521C5.91354 9.34665 5.99343 9.22361 6.10596 9.13569C6.21849 9.04776 6.35719 9 6.5 9C6.64281 9 6.78151 9.04776 6.89404 9.13569C7.00657 9.22361 7.08646 9.34665 7.121 9.48521L8.5 15.0002L10 9.00021"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11.5V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 9L21 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 9L16 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9H13.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81154">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
