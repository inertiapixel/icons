import React from "react";

export const BackgroundIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84568)">
<path d="M4 8L8 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 4L4 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20L20 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 10L10 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 16L16 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84568">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
