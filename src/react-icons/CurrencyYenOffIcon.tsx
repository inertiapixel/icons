import React from "react";

export const CurrencyYenOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77121)">
<path d="M12 19V12M17 5L13.672 9.66"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 17H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77121">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
