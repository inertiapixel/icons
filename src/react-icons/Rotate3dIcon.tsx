import React from "react";

export const Rotate3dIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64900)">
<path d="M12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10V14L16 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11L19 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 15.5L3 12.5L8 9.5L13 12.5V18L8 21V15.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12.5V18L8 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 15.5456L13 12.5156"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64900">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
