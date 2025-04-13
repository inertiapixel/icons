import React from "react";

export const ArrowBadgeLeft1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85610)">
<path d="M11 17H17L13 12L17 7H11L7 12L11 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85610">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
