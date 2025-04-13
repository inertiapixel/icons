import React from "react";

export const HttpGetIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71519)">
<path d="M7 8H5C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H7V12H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8H10V16H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12H12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71519">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
