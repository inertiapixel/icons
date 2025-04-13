import React from "react";

export const ComponentsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77977)">
<path d="M3 12L6 15L9 12L6 9L3 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 14.5L21 12L18 9L15.5 11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.499 8.501L15 6L12 3L9.5 5.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18L12 21L15 18L12 15L9 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77977">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
