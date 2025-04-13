import React from "react";

export const MathOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69136)">
<path d="M14 19L16.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 14.5L20 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0015 5H12.0015L11.3555 7.262"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.448 10.4297L8 18.9987L5 12.9987H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69136">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
