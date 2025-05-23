import React from "react";

export const RepeatOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65260)">
<path d="M4 12V9C4 7.664 4.873 6.532 6.08 6.144M10 6H20M20 6L17 3M20 6L17 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12V15C20.0003 15.3003 19.9554 15.599 19.867 15.886M17.877 17.87C17.5927 17.9565 17.2972 18.0003 17 18H4M4 18L7 21M4 18L7 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65260">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
