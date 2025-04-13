import React from "react";

export const BrandViteIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81253)">
<path d="M10 4.5L16 3L14 9.5L16 9L12 16V11L9 12L10 4.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6.5L22 5L12 22L2 5L9.741 6.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81253">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
