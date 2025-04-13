import React from "react";

export const ConePlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77959)">
<path d="M18.03 12.0219L12.87 2.50695C12.7828 2.35305 12.6563 2.22504 12.5035 2.13598C12.3506 2.04692 12.1769 2 12 2C11.8231 2 11.6494 2.04692 11.4965 2.13598C11.3437 2.22504 11.2172 2.35305 11.13 2.50695L3 17.4969V17.9969C3 19.6569 7.03 20.9999 12 20.9999C12.17 20.9999 12.34 20.9979 12.508 20.9949"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77959">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
