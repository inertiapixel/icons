import React from "react";

export const BrandXdeepIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81129)">
<path d="M14.401 8.398L16 6H21L17 12L21 18H16L8 6H3L7 12L3 18H8L9.596 15.607"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81129">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
