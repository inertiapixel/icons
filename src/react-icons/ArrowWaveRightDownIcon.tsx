import React from "react";

export const ArrowWaveRightDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85033)">
<path d="M17 14H21V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12.001C3.887 13.285 5.48 14.034 7 14.001C8.52 14.034 10.113 13.285 11 12.001C11.887 10.717 13.48 9.96805 15 10.001C16.52 9.96805 18 11.001 19 12.001L21 14.001"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85033">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
