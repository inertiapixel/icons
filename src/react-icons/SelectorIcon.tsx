import React from "react";

export const SelectorIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64369)">
<path d="M8 9L12 5L16 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15L12 19L8 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64369">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
