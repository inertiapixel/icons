import React from "react";

export const RadiusBottomRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65544)">
<path d="M19 5V11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65544">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
