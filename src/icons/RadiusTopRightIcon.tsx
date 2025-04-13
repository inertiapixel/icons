import React from "react";

export const RadiusTopRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65538)">
<path d="M5 5H11C13.1217 5 15.1566 5.84285 16.6569 7.34315C18.1571 8.84344 19 10.8783 19 13V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65538">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
