import React from "react";

export const CategoryPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79887)">
<path d="M14 17H20M17 14V20M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79887">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
