import React from "react";

export const BrandOfficeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81817)">
<path d="M4 18H13V6L8 8V13L4 15V7L13 3L20 5V18L13 21L4 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81817">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
