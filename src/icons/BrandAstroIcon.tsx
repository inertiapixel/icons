import React from "react";

export const BrandAstroIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82769)">
<path d="M14.972 3.483C15.135 3.679 15.219 3.943 15.385 4.47L19.025 16C17.6526 15.3139 16.186 14.8353 14.673 14.58L12.303 6.857C12.2825 6.79477 12.2428 6.74064 12.1896 6.70237C12.1365 6.6641 12.0725 6.64367 12.007 6.644C11.9415 6.64395 11.8777 6.66463 11.8247 6.70307C11.7717 6.74151 11.7323 6.79575 11.712 6.858L9.37 14.576C7.85077 14.8302 6.37792 15.3095 5 15.998L8.657 4.468C8.825 3.941 8.908 3.678 9.072 3.482C9.216 3.31 9.403 3.176 9.616 3.094C9.858 3 10.143 3 10.715 3H13.327C13.899 3 14.185 3 14.427 3.094C14.64 3.176 14.827 3.31 14.972 3.483Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18C9 19.5 11 21 12 22C13 21 15 19 15 18C13 19 11 19 9 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82769">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
