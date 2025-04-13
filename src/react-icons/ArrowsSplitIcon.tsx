import React from "react";

export const ArrowsSplitIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84813)">
<path d="M21 17H13L9.5 12H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9989 7H12.9989L9.50391 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 10L21 7L18 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 20L21 17L18 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84813">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
