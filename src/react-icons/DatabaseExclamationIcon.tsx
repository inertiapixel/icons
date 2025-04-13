import React from "react";

export const DatabaseExclamationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77005)">
<path d="M4 6C4 7.657 7.582 9 12 9C16.418 9 20 7.657 20 6C20 4.343 16.418 3 12 3C7.582 3 4 4.343 4 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V12C4 13.657 7.582 15 12 15C13.118 15 14.182 14.914 15.148 14.759M20 12V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V18C4 19.657 7.582 21 12 21C13.064 21 14.079 20.922 15.007 20.78"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77005">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
