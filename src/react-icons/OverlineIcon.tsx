import React from "react";

export const OverlineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67196)">
<path d="M7 9V14C7 15.3261 7.52678 16.5979 8.46447 17.5355C9.40215 18.4732 10.6739 19 12 19C13.3261 19 14.5979 18.4732 15.5355 17.5355C16.4732 16.5979 17 15.3261 17 14V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67196">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
