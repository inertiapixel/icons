import React from "react";

export const HomeShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71653)">
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.247 13 13.484 13.045 13.702 13.127"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12H21L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71653">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
