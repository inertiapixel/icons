import React from "react";

export const LetterKSmallIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70609)">
<path d="M10.5 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 8L11.5 12L14.5 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 12H11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70609">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
