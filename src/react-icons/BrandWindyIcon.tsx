import React from "react";

export const BrandWindyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81165)">
<path d="M9.00187 4C9.00187 9.5 8.67187 20 13.0019 20C17.3319 20 20.5479 8.73 21.0019 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 4C3.253 9.44 4.449 20 8.894 20C13.338 20 17.314 9.964 18 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81165">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
