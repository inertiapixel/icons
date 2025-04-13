import React from "react";

export const NavigationWestIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67597)">
<path d="M9 3L10 9L12 5.25L14 9L15 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21L12 13L8 21L12 19L16 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67597">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
