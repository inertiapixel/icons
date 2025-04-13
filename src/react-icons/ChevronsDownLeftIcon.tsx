import React from "react";

export const ChevronsDownLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79429)">
<path d="M11 5V13H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9V17H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79429">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
