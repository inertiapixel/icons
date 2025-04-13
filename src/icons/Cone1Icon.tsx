import React from "react";

export const Cone1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77956)">
<path d="M21 17.9969V17.4969L12.87 2.50695C12.7828 2.35305 12.6563 2.22504 12.5035 2.13598C12.3506 2.04692 12.1769 2 12 2C11.8231 2 11.6494 2.04692 11.4965 2.13598C11.3437 2.22504 11.2172 2.35305 11.13 2.50695L3 17.4959V17.9959C3 19.6549 7.03 20.9989 12 20.9989C16.97 20.9989 21 19.6549 21 17.9969Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77956">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
