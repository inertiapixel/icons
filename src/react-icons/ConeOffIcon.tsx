import React from "react";

export const ConeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77964)">
<path d="M20.396 16.3839L12.87 2.50695C12.7828 2.35305 12.6563 2.22504 12.5035 2.13598C12.3506 2.04692 12.1769 2 12 2C11.8231 2 11.6494 2.04692 11.4965 2.13598C11.3437 2.22504 11.2172 2.35305 11.13 2.50695L9.504 5.50495M8.097 8.09895L3 17.4969V17.9969C3 19.6569 7.03 20.9999 12 20.9999C15.202 20.9999 18.014 20.4419 19.609 19.6019"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77964">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
