import React from "react";

export const ArrowForkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85394)">
<path d="M16 3H21V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3H3V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3L13.464 10.536C12.5269 11.4734 12.0003 12.7445 12 14.07V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L10.536 10.536C11.4731 11.4734 11.9997 12.7445 12 14.07V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85394">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
