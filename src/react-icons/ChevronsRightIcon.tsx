import React from "react";

export const ChevronsRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79413)">
<path d="M7 7L12 12L7 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 7L18 12L13 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79413">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
