import React from "react";

export const LogicNotIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69921)">
<path d="M22 12H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5L15 12L5 19V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12C15 12.5304 15.2107 13.0391 15.5858 13.4142C15.9609 13.7893 16.4696 14 17 14C17.5304 14 18.0391 13.7893 18.4142 13.4142C18.7893 13.0391 19 12.5304 19 12C19 11.4696 18.7893 10.9609 18.4142 10.5858C18.0391 10.2107 17.5304 10 17 10C16.4696 10 15.9609 10.2107 15.5858 10.5858C15.2107 10.9609 15 11.4696 15 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69921">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
