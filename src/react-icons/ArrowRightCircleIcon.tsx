import React from "react";

export const ArrowRightCircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85191)">
<path d="M18 15L21 12L18 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12C3 12.5304 3.21071 13.0391 3.58579 13.4142C3.96086 13.7893 4.46957 14 5 14C5.53043 14 6.03914 13.7893 6.41421 13.4142C6.78929 13.0391 7 12.5304 7 12C7 11.4696 6.78929 10.9609 6.41421 10.5858C6.03914 10.2107 5.53043 10 5 10C4.46957 10 3.96086 10.2107 3.58579 10.5858C3.21071 10.9609 3 11.4696 3 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85191">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
