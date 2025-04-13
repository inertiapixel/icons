import React from "react";

export const ArrowWaveLeftDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85041)">
<path d="M7 14H3V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12.001C20.113 13.285 18.52 14.034 17 14.001C15.48 14.034 13.887 13.285 13 12.001C12.113 10.717 10.52 9.96805 9 10.001C7.48 9.96805 6 11.001 5 12.001L3 14.001"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85041">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
