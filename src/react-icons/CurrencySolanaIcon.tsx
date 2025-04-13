import React from "react";

export const CurrencySolanaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77156)">
<path d="M4 18H16L20 14H8L4 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14L4 10H16L20 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10L20 6H8L4 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77156">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
