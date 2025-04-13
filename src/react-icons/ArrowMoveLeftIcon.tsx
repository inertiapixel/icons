import React from "react";

export const ArrowMoveLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85263)">
<path d="M13 12H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15L3 12L6 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12C17 11.4696 17.2107 10.9609 17.5858 10.5858C17.9609 10.2107 18.4696 10 19 10C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12C21 12.5304 20.7893 13.0391 20.4142 13.4142C20.0391 13.7893 19.5304 14 19 14C18.4696 14 17.9609 13.7893 17.5858 13.4142C17.2107 13.0391 17 12.5304 17 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85263">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
