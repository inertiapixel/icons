import React from "react";

export const LetterSpacingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70546)">
<path d="M5 12V6.5C5 5.83696 5.26339 5.20107 5.73223 4.73223C6.20107 4.26339 6.83696 4 7.5 4C8.16304 4 8.79893 4.26339 9.26777 4.73223C9.73661 5.20107 10 5.83696 10 6.5V12M10 8H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 4L16 12L19 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 20L19 18L17 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16L5 18L7 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70546">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
