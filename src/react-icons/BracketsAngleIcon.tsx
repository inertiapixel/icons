import React from "react";

export const BracketsAngleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82933)">
<path d="M8 4L3 12L8 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4L21 12L16 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82933">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
