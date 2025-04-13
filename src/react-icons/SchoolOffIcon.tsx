import React from "react";

export const SchoolOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64541)">
<path d="M22 9L12 5L9.864 5.854M22 9L15.575 11.57M22 9V15M7 7L2 9L12 13L12.697 12.721"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10.6016V16.0016C6 17.6586 8.686 19.0016 12 19.0016C14.334 19.0016 16.357 18.3356 17.35 17.3616M18 14.0016V10.6016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64541">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
