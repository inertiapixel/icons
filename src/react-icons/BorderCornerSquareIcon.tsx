import React from "react";

export const BorderCornerSquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83439)">
<path d="M4 20V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83439">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
