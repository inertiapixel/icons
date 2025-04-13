import React from "react";

export const StairsUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62485)">
<path d="M22 6H17V11H12V16H7V21H2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6L6 3L9 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62485">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
