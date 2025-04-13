import React from "react";

export const TrafficConeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61207)">
<path d="M4 20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.39844 10H9.99844M13.9984 10H14.5984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.80078 15H15.0008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 20L9.5 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 6.5L11 5H13L15 11M17 17L18 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61207">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
