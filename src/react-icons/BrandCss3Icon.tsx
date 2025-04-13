import React from "react";

export const BrandCss3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82531)">
<path d="M20 4L18 18.5L12 20.5L6 18.5L4 4H20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 8H15.5L11 12H15L14.5 15.5L12 16.25L9.5 15.5L9.4 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82531">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
