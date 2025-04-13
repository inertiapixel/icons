import React from "react";

export const Pin1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66319)">
<path d="M15 4.5L11 8.5L7 10L5.5 11.5L12.5 18.5L14 17L15.5 13L19.5 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15L4.5 19.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 4L20 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66319">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
