import React from "react";

export const LanguageIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71003)">
<path d="M4 5H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3V5C9 9.418 6.761 13 4 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9C5 11.144 7.952 12.908 11.7 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20L16 11L20 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0984 18H12.8984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71003">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
