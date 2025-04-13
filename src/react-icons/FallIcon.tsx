import React from "react";

export const FallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74474)">
<path d="M11 21L12 16L11 12L8 8H12L15 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16L5 12L8 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5C7 4.73478 6.89464 4.48043 6.70711 4.29289C6.51957 4.10536 6.26522 4 6 4C5.73478 4 5.48043 4.10536 5.29289 4.29289C5.10536 4.48043 5 4.73478 5 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 12H16L20 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74474">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
