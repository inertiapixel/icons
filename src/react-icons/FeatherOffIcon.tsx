import React from "react";

export const FeatherOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74458)">
<path d="M4 20L12 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5V10H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11V15H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 13V18H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 13L9.502 9.498M11.525 7.475L14 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10C19.638 9.364 20 8.485 20 7.514C19.9999 7.05232 19.9088 6.59519 19.732 6.16871C19.5551 5.74224 19.296 5.35478 18.9694 5.02846C18.6428 4.70214 18.2551 4.44336 17.8285 4.26689C17.4019 4.09043 16.9447 3.99974 16.483 4C15.513 4 14.636 4.367 14 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 18L14.499 14.501M16.507 12.493L19 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74458">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
