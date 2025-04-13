import React from "react";

export const CraneOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77691)">
<path d="M6 21H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5V3L8 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6L3 9H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3L19 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9V13C17.5304 13 18.0391 13.2107 18.4142 13.5858C18.7893 13.9609 19 14.4696 19 15M17 17C16.4696 17 15.9609 16.7893 15.5858 16.4142C15.2107 16.0391 15 15.5304 15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77691">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
