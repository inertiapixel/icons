import React from "react";

export const Diamond1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_75421)">
<path d="M6 5H18L21 10L12.5 19.5C12.4348 19.5665 12.357 19.6194 12.2712 19.6554C12.1853 19.6915 12.0931 19.7101 12 19.7101C11.9069 19.7101 11.8147 19.6915 11.7288 19.6554C11.643 19.6194 11.5652 19.5665 11.5 19.5L3 10L6 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12.0008L8 9.80078L8.6 8.80078" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75421">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
