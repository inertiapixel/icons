import React from "react";

export const ArrowUpRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85065)">
<path d="M17 7L7 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 7H17V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85065">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
