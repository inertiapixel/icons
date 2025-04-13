import React from "react";

export const SquareRoundedChevronsUp1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62768)">
<path d="M9 15L12 12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11L12 8L15 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3C19.2 3 21 4.8 21 12C21 19.2 19.2 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62768">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
