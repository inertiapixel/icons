import React from "react";

export const SwordsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62165)">
<path d="M21 3V8L10 17L6 21L3 18L7 14L16 3H21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13L11 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.3203 17.3217L18.0003 21.0017L21.0003 18.0017L17.6353 14.6367"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5.5L8 3H3V8L6 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62165">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
