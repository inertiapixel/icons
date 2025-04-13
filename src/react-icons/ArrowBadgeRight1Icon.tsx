import React from "react";

export const ArrowBadgeRight1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85607)">
<path d="M13 7H7L11 12L7 17H13L17 12L13 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85607">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
