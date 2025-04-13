import React from "react";

export const Multiplier15xIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67891)">
<path d="M4 16V8L2 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12H10V8H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16L21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 16L17 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67891">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
