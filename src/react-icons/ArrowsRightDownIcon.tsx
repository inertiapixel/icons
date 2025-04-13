import React from "react";

export const ArrowsRightDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84853)">
<path d="M3 17L7 21L11 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21V10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11L21 7L17 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84853">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
