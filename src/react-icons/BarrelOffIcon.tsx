import React from "react";

export const BarrelOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84283)">
<path d="M8 4H16.722C17.1148 4.00012 17.4988 4.11588 17.8262 4.33284C18.1536 4.5498 18.4098 4.85835 18.563 5.22C19.521 7.48 20 9.74 20 12C19.9988 13.2144 19.8623 14.4248 19.593 15.609M18.629 18.622L18.563 18.78C18.4098 19.1417 18.1536 19.4502 17.8262 19.6672C17.4988 19.8841 17.1148 19.9999 16.722 20H7.278C6.88525 19.9999 6.50122 19.8841 6.17383 19.6672C5.84644 19.4502 5.59017 19.1417 5.437 18.78C4.479 16.52 4 14.26 4 12C4 9.79 4.458 7.58 5.374 5.37"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 4C14.585 6.337 14.913 8.674 14.985 11.01M14.871 14.87C14.7145 16.6 14.4232 18.3152 14 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 4C9.8648 4.54096 9.74276 5.08512 9.634 5.632M9.128 9.133C9.04265 10.0863 8.99994 11.0429 9 12C9 14.667 9.333 17.333 10 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 16H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5 8H12M8 8H4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84283">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
