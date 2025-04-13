import React from "react";

export const LanguageOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71010)">
<path d="M4 5H5M9 5H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3V5M8.492 8.517C7.678 11.172 5.972 13 4 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9C5 11.144 7.952 12.908 11.7 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20L14.463 14.459M15.691 11.695L16 11L16.8 12.8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9984 18H12.8984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71010">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
