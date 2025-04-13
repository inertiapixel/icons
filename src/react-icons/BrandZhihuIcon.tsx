import React from "react";

export const BrandZhihuIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81069)">
<path d="M14 6H20V18H18L16 20L15 18H14V6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 6H5.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 4C5.5 6.5 4.5 7.5 3.5 8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6V13C8 17.5 6 18.5 4 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 18L8 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81069">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
