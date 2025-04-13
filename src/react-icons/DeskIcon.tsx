import React from "react";

export const DeskIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76855)">
<path d="M3 6H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 19V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6V14C15 14.5304 15.2107 15.0391 15.5858 15.4142C15.9609 15.7893 16.4696 16 17 16H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76855">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
