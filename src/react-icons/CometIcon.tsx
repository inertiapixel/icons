import React from "react";

export const CometIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78008)">
<path d="M15.5 18.5L12.5 20L13 16.5L11 14.5L14 14L15.5 11L17 14L20 14.5L18 16.5L18.5 20L15.5 18.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4L11 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4L12.5 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 9L7.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78008">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
