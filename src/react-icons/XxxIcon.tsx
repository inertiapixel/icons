import React from "react";

export const XxxIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59466)">
<path d="M10 8L14 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16L14 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8L21 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16L21 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8L7 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16L7 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59466">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
