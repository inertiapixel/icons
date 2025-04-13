import React from "react";

export const BrandBinanceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82706)">
<path d="M6 8L8 10L12 6L16 10L18 8L12 2L6 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16L8 14L12 18L15.5 14.5L17.5 16.5L12 22L6 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 10L22 12L20 14L18 12L20 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10L6 12L4 14L2 12L4 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10L14 12L12 14L10 12L12 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82706">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
