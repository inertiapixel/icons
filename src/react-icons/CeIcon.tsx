import React from "react";

export const CeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79870)">
<path d="M9 6C7.4087 6 5.88258 6.63214 4.75736 7.75736C3.63214 8.88258 3 10.4087 3 12C3 13.5913 3.63214 15.1174 4.75736 16.2426C5.88258 17.3679 7.4087 18 9 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 6C19.4087 6 17.8826 6.63214 16.7574 7.75736C15.6321 8.88258 15 10.4087 15 12C15 13.5913 15.6321 15.1174 16.7574 16.2426C17.8826 17.3679 19.4087 18 21 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79870">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
