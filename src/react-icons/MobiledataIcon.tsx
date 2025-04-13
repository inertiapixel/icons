import React from "react";

export const MobiledataIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68342)">
<path d="M16 12V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 20V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 7L16 4L19 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17L8 20L11 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68342">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
