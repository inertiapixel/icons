import React from "react";

export const TrainIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61179)">
<path d="M21 13C21 9.13 17.63 6 11 6H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 15H19C19.5304 15 20.0391 14.7893 20.4142 14.4142C20.7893 14.0391 21 13.5304 21 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6V11H20.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11V6.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61179">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
