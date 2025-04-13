import React from "react";

export const TallymarksIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62012)">
<path d="M6 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17L21 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62012">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
