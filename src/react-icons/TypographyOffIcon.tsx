import React from "react";

export const TypographyOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60820)">
<path d="M4 20H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.89844 15H13.7984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 13L16 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 19.9998L9.09 9.09375"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1797 6.183L10.9987 4H12.9987L16.9027 12.924"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60820">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
