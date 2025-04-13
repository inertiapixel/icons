import React from "react";

export const BrandLinqpadIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82001)">
<path d="M5 21H8.5L11 15L13.5 14L16 21H20L21 16.5L19 15.5L12 3.5L6 3L7.5 7L10 7.5L11 10L4 18L5 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82001">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
