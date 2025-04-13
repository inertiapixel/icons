import React from "react";

export const ArrowDownRhombusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85437)">
<path d="M12 8V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 18L12 21L9 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 5.5L12 3L9.5 5.5L12 8L14.5 5.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85437">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
