import React from "react";

export const CurrencyLiraIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77264)">
<path d="M10 5V20C11.8565 20 13.637 19.2625 14.9497 17.9497C16.2625 16.637 17 14.8565 17 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15L14 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7L6 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77264">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
