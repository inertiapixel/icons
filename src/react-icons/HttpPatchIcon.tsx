import React from "react";

export const HttpPatchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71497)">
<path d="M3 12H5C5.53043 12 6.03914 11.7893 6.41421 11.4142C6.78929 11.0391 7 10.5304 7 10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8H3V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16V10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71497">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
