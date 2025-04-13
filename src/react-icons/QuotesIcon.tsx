import React from "react";

export const QuotesIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65592)">
<path d="M3.99975 12C2.66675 10.146 2.66675 7.854 3.99975 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99975 12C6.66675 10.146 6.66675 7.854 7.99975 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 18C17.333 16.146 17.333 13.854 16 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 18C21.333 16.146 21.333 13.854 20 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65592">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
