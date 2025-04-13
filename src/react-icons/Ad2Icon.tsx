import React from "react";

export const Ad2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86519)">
<path d="M11.933 5H5V21H18V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13H14V9H9V13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 5V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 6L20 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 9H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86519">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
