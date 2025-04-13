import React from "react";

export const FeatherIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74454)">
<path d="M4 20L14 10M14 10V5L10 9M14 10H19M10 9V14H15M10 9L6 13V18H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5C14.636 4.367 15.513 4 16.483 4C16.9447 3.99974 17.4019 4.09043 17.8285 4.26689C18.2551 4.44336 18.6428 4.70214 18.9694 5.02846C19.296 5.35478 19.5551 5.74224 19.732 6.16871C19.9088 6.59519 19.9999 7.05232 20 7.514C20 8.485 19.638 9.364 19 10L15 14L11 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74454">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
