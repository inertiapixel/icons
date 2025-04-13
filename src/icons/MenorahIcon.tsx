import React from "react";

export const MenorahIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68968)">
<path d="M12 4V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4V6C8 7.06087 8.42143 8.07828 9.17157 8.82843C9.92172 9.57857 10.9391 10 12 10C13.0609 10 14.0783 9.57857 14.8284 8.82843C15.5786 8.07828 16 7.06087 16 6V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V6C4 8.12173 4.84285 10.1566 6.34315 11.6569C7.84344 13.1571 9.87827 14 12 14C14.1217 14 16.1566 13.1571 17.6569 11.6569C19.1571 10.1566 20 8.12173 20 6V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68968">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
