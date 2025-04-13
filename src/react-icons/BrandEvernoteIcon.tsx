import React from "react";

export const BrandEvernoteIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82337)">
<path d="M4 8H9V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9 19C18.5 16.5 19 13.529 19 10C19 5.5 17 5 16 5C14.094 5 13 4.5 12.5 4C12.146 3.646 12 3 11 3H9L4 8C4 14 6.5 16 9 16C10 16 10.5 15.5 11 14.5C11.5 13.5 12.414 14.174 13.5 14.5C14.544 14.813 15.51 14.755 16 15C17 15.5 18 16.5 18 18C18 18.5 18 21 15 21C12 21 12 18 14 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82337">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
