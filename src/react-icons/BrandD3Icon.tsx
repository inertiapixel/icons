import React from "react";

export const BrandD3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82499)">
<path d="M3 4H4.8C8.776 4 12 7.582 12 12C12 16.418 8.776 20 4.8 20H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4H17.472C19.42 4 21 5.79 21 8C21 10.21 19.42 12 17.472 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.472 12H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.4731 12H15.1211"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.472 12C19.42 12 21 13.79 21 16C21 18.21 19.42 20 17.472 20H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82499">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
