import React from "react";

export const HorseshoeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71600)">
<path d="M19 17C19.5 15.758 21 15 21 12C21 9 20 3 12 3C4 3 3 9 3 12C3 15 4.495 15.749 5 17L3 18L5 21L7.406 19.853C8.656 19.139 9.184 17.773 8.609 16.49C7.531 14.083 7 8 12 8C17 8 16.469 14.083 15.39 16.49C14.816 17.774 15.345 19.139 16.594 19.853L19 21L21 18L19 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71600">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
