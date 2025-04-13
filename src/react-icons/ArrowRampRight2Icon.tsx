import React from "react";

export const ArrowRampRight2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85212)">
<path d="M6 3V11.707"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 14L20 10L16 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 21C6 14.925 10.925 10 17 10H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85212">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
