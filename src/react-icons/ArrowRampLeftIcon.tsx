import React from "react";

export const ArrowRampLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85217)">
<path d="M17 3V11.707"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 7L17 3L21 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 14L3 10L7 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21C17 18.0826 15.8411 15.2847 13.7782 13.2218C11.7153 11.1589 8.91738 10 6 10H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85217">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
