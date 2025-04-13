import React from "react";

export const UnderlineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60773)">
<path d="M7 5V10C7 11.3261 7.52678 12.5979 8.46447 13.5355C9.40215 14.4732 10.6739 15 12 15C13.3261 15 14.5979 14.4732 15.5355 13.5355C16.4732 12.5979 17 11.3261 17 10V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 19H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60773">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
