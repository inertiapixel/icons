import React from "react";

export const BatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84051)">
<path d="M17 16C17.74 13.714 19.778 12.238 22 13C21.827 10.405 22.13 7.686 20 5.5C18.292 8.148 16.642 8.057 15 8V4L12 6L9 4V8C7.358 8.057 5.708 8.148 4 5.5C1.87 7.686 2.173 10.405 2 13C4.222 12.238 6.26 13.714 7 16C9.593 16 10.889 16.952 12 20C13.111 16.952 14.407 16 17 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84051">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
