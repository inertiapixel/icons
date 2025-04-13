import React from "react";

export const ToiletPaperIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61487)">
<path d="M3 10C3 11.8565 3.31607 13.637 3.87868 14.9497C4.44129 16.2625 5.20435 17 6 17C6.79565 17 7.55871 16.2625 8.12132 14.9497C8.68393 13.637 9 11.8565 9 10C9 8.14348 8.68393 6.36301 8.12132 5.05025C7.55871 3.7375 6.79565 3 6 3C5.20435 3 4.44129 3.7375 3.87868 5.05025C3.31607 6.36301 3 8.14348 3 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10C21 6.134 19.657 3 18 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 3H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10V20L18 19L15 21L12 18L9 20V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10H6.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61487">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
