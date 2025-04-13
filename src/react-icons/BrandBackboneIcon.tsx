import React from "react";

export const BrandBackboneIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82749)">
<path d="M5 20L19 12L5 4V20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 20L5 12L19 4V20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82749">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
