import React from "react";

export const CurrencyDogecoinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77406)">
<path d="M6 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 6V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18H12C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77406">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
