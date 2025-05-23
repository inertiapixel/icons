import React from "react";

export const DiaboloIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75449)">
<path d="M4 6C4 6.79565 4.84285 7.55871 6.34315 8.12132C7.84344 8.68393 9.87827 9 12 9C14.1217 9 16.1566 8.68393 17.6569 8.12132C19.1571 7.55871 20 6.79565 20 6C20 5.20435 19.1571 4.44129 17.6569 3.87868C16.1566 3.31607 14.1217 3 12 3C9.87827 3 7.84344 3.31607 6.34315 3.87868C4.84285 4.44129 4 5.20435 4 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V6.143C3.99991 6.24721 4.0161 6.35079 4.048 6.45L6 12L4.036 17.67C4.01219 17.7563 4.00008 17.8455 4 17.935V18C4 19.657 7.582 21 12 21C16.418 21 20 19.657 20 18V17.935C19.9999 17.8455 19.9878 17.7563 19.964 17.67L18 12L19.952 6.45C19.9839 6.35079 20.0001 6.24721 20 6.143V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12C6 13.105 8.686 14 12 14C15.314 14 18 13.105 18 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75449">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
