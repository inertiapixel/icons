import React from "react";

export const PrescriptionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65830)">
<path d="M6 19V3H10.5C11.6935 3 12.8381 3.47411 13.682 4.31802C14.5259 5.16193 15 6.30653 15 7.5C15 8.69347 14.5259 9.83807 13.682 10.682C12.8381 11.5259 11.6935 12 10.5 12H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21L10 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 21L19 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65830">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
