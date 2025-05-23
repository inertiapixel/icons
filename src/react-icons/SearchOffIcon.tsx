import React from "react";

export const SearchOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64429)">
<path d="M5.03755 5.06181C4.38816 5.71251 3.8733 6.48474 3.52236 7.33442C3.17141 8.1841 2.99126 9.09458 2.99219 10.0139C2.99407 11.8705 3.7334 13.6503 5.04755 14.9618C6.3617 16.2733 8.14301 17.009 9.99962 17.0072C11.8562 17.0053 13.6361 16.266 14.9475 14.9518M16.5315 12.5178C17.0195 11.2543 17.1304 9.87644 16.8508 8.5512C16.5712 7.22595 15.9132 6.01027 14.9565 5.05155C13.9998 4.09283 12.7855 3.43225 11.4608 3.14989C10.1362 2.86754 8.75805 2.97554 7.49355 3.46081"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64429">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
