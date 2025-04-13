import React from "react";

export const ArrowAutofitWidthIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85628)">
<path d="M4 12V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 18H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15L3 18L6 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15L21 18L18 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85628">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
