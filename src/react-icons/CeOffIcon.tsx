import React from "react";

export const CeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79875)">
<path d="M6.53078 6.53125C5.28032 7.09605 4.26118 8.07232 3.64317 9.29736C3.02517 10.5224 2.84564 11.9222 3.13449 13.2636C3.42334 14.6049 4.16313 15.8068 5.23059 16.6689C6.29804 17.5309 7.62868 18.0012 9.00078 18.0012"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.0012 6C19.5725 5.99978 18.1906 6.50938 17.1041 7.43713C16.0176 8.36489 15.2978 9.64989 15.0742 11.061L16.0012 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79875">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
