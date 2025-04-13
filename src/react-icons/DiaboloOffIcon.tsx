import React from "react";

export const DiaboloOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75461)">
<path d="M4.727 4.749C4.26 5.129 4 5.553 4 6C4 7.217 5.933 8.265 8.71 8.735M12.967 8.978C16.929 8.8 20 7.534 20 6C20 4.343 16.418 3 12 3C10.34 3 8.798 3.19 7.52 3.514"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V6.143C3.99991 6.24721 4.0161 6.35079 4.048 6.45L6 12L4.036 17.67C4.01219 17.7563 4.00008 17.8455 4 17.935V18C4 19.657 7.582 21 12 21C15.218 21 17.992 20.288 19.262 19.26M19.051 15.033L18 12L19.952 6.45C19.9839 6.35079 20.0001 6.24721 20 6.143V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12C6 13.105 8.686 14 12 14C12.656 14 13.288 13.965 13.879 13.9M17.077 13.066C17.662 12.758 18 12.392 18 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75461">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
