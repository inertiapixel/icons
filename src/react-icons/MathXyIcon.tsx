import React from "react";

export const MathXyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69057)">
<path d="M14 9L17 14.063"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 9L10 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15L10 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9992 9L15.1992 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69057">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
