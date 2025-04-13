import React from "react";

export const HeadingOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72352)">
<path d="M7 12H12M16 12H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 5V13M17 17V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 5H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 19H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72352">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
