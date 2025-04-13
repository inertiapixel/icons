import React from "react";

export const BrandThreadsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81368)">
<path d="M19 7.5C17.667 4.5 15.333 3 12 3C7 3 4 5.5 4 12C4 18.5 7.5 21 12 21C16.5 21 19 18 19 16C19 14 18 11 12 11C9.5 11 9 12.25 9 13.5C9 15 10 16 11.5 16C14 16 15 14.5 15 11C15 7.5 13 7 12 7C11 7 10.167 7.333 9.5 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81368">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
