import React from "react";

export const CodeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78182)">
<path d="M7 8L3 12L7 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8L21 12L18.5 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.9991 4L12.7981 8.805M11.9961 12.012L9.99609 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78182">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
