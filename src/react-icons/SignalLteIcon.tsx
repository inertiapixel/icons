import React from "react";

export const SignalLteIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63628)">
<path d="M21 8H17V16H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12H19.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8V16H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63628">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
