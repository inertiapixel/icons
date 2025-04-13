import React from "react";

export const BrandSoundcloudIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81531)">
<path d="M17 11H18C19.38 11 21 12.274 21 14C21 15.657 19.5 17 18 17H12V7C15 7 16.5 8.5 17 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 17V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81531">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
