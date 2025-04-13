import React from "react";

export const LogicXorIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69900)">
<path d="M22 12H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19C8.778 14.333 8.778 9.667 7 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5C20.667 7.1 20.667 17.6 10 19C11.806 14.333 11.806 9.667 10 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69900">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
