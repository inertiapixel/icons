import React from "react";

export const BrandPolymerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81717)">
<path d="M6.706 6L3 12L6.706 18H7.765L16.235 6H17.295L21 12L17.294 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81717">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
