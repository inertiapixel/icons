import React from "react";

export const PlugXIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66076)">
<path d="M13.5502 17.733C12.8014 17.9687 12.0126 18.0501 11.2314 17.9724C10.4503 17.8946 9.69304 17.6592 9.00545 17.2804C8.31786 16.9017 7.71422 16.3874 7.23102 15.7688C6.74782 15.1501 6.39509 14.4399 6.19417 13.681C5.93155 12.6908 5.9354 11.6488 6.20532 10.6606C6.47524 9.67243 7.00165 8.77317 7.73117 8.054L9.78517 6L16.9502 13.165"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20L7.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 4L11.5 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 9L16.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16L20 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 16L16 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66076">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
