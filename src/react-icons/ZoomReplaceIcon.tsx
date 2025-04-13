import React from "react";

export const ZoomReplaceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59291)">
<path d="M21 21L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.28906 7.99913C3.63987 6.82336 4.29357 5.76046 5.18464 4.91695C6.07571 4.07345 7.17284 3.47898 8.36606 3.19313C10.0408 2.7878 11.8061 3.01247 13.3259 3.82437C14.8457 4.63628 16.0139 5.97872 16.6081 7.59613"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4V8H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.7056 12C16.3539 13.1739 15.7001 14.2349 14.8097 15.0769C13.9192 15.9189 12.8234 16.5124 11.6316 16.798C9.95704 17.2031 8.19197 16.9783 6.67238 16.1664C5.15278 15.3545 3.98476 14.0122 3.39062 12.395"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16V12H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59291">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
