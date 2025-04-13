import React from "react";

export const ArrowForwardUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85385)">
<path d="M15 14L19 10L15 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10H8C6.93913 10 5.92172 10.4214 5.17157 11.1716C4.42143 11.9217 4 12.9391 4 14C4 15.0609 4.42143 16.0783 5.17157 16.8284C5.92172 17.5786 6.93913 18 8 18H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85385">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
