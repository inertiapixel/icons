import React from "react";

export const MathXPlusYIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69063)">
<path d="M16 9L19 14.063"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9L8 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15L8 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.9992 9L17.1992 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69063">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
