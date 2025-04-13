import React from "react";

export const AntennaBars3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85818)">
<path d="M6 18V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 18V18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85818">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
