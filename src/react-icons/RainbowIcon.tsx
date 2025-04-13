import React from "react";

export const RainbowIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65527)">
<path d="M22 17C22 11.477 17.523 7 12 7C6.477 7 2 11.477 2 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 17C18 15.4087 17.3679 13.8826 16.2426 12.7574C15.1174 11.6321 13.5913 11 12 11C10.4087 11 8.88258 11.6321 7.75736 12.7574C6.63214 13.8826 6 15.4087 6 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65527">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
