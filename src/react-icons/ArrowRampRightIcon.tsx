import React from "react";

export const ArrowRampRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85201)">
<path d="M7 3V11.707"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 7L7 3L3 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 14L21 10L17 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21C7 18.0826 8.15893 15.2847 10.2218 13.2218C12.2847 11.1589 15.0826 10 18 10H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85201">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
