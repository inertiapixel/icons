import React from "react";

export const ArrowsRandomIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84858)">
<path d="M20 21H16V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21L21 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 9.504L3 7.504L5 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7.50281L9.83 5.63281"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16L8 15L9 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 15L4.5 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 5L20.5 9L16.5 8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9L16 3.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84858">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
