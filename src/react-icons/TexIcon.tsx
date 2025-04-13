import React from "react";

export const TexIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61864)">
<path d="M9 8V7H3V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15L16 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15L21 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 11H10V19H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61864">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
