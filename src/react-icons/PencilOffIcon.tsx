import React from "react";

export const PencilOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66893)">
<path d="M10 9.99821L4 15.9982V19.9982H8L14 13.9982M15.99 12.0082L18.494 9.50421C19.0244 8.97378 19.3224 8.25435 19.3224 7.50421C19.3224 6.75406 19.0244 6.03464 18.494 5.50421C17.9636 4.97378 17.2441 4.67578 16.494 4.67578C15.7439 4.67578 15.0244 4.97378 14.494 5.50421L11.994 8.00421"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 6.5L17.5 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66893">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
