import React from "react";

export const PlaylistAddIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66148)">
<path d="M19 8H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 16H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66148">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
