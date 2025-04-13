import React from "react";

export const PackageOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67172)">
<path d="M8.812 4.793L12 3L20 7.5V16M17.718 17.784L12 21L4 16.5V7.5L6.223 6.25"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.543 10.57L20 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L4 7.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5.25L11.65 7.697M9.086 9.139L8 9.75"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67172">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
