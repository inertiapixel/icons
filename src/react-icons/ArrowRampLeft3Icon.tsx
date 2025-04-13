import React from "react";

export const ArrowRampLeft3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85223)">
<path d="M18 3V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16L4 12L8 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 21V15C18 14.2044 17.6839 13.4413 17.1213 12.8787C16.5587 12.3161 15.7956 12 15 12H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85223">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
