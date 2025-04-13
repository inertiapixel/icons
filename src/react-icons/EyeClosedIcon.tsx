import React from "react";

export const EyeClosedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74680)">
<path d="M21 9C18.6 11.667 15.6 13 12 13C8.4 13 5.4 11.667 3 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.9992L5.5 11.1992"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9998 14.9752L18.5078 11.1992"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17L9.5 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17L14.5 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74680">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
