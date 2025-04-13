import React from "react";

export const ArrowBounceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85478)">
<path d="M10 18H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8C5.38695 8 7.67613 8.94821 9.36396 10.636C11.0518 12.3239 12 14.6131 12 17V18L13.428 13.715C14.4346 10.6958 16.5993 8.20013 19.446 6.777L20 6.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6H20V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85478">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
