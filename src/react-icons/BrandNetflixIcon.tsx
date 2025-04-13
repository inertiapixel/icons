import React from "react";

export const BrandNetflixIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81871)">
<path d="M9 3L19 21H15L5 3H9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 3V21H9V10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21V3H15V13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81871">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
