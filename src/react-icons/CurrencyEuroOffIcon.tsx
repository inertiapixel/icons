import React from "react";

export const CurrencyEuroOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77340)">
<path d="M17.1991 7.00011C15.2221 4.74011 12.2451 4.39811 9.96513 5.96011M8.05213 8.03911C6.44813 10.7591 6.67813 14.5081 8.74213 16.9331C11.0341 19.6241 14.7421 19.6911 17.0981 17.1131"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10H5M5 14H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77340">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
