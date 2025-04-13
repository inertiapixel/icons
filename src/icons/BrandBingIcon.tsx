import React from "react";

export const BrandBingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82703)">
<path d="M5 3L9 4.5V16.5L15 14L13 13L12 9L19 11.5V16L9 21L5 19V3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82703">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
