import React from "react";

export const Campfire1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80155)">
<path d="M4 21L20 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21L4 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11C16 8 14 8 14 3C10 5 8 8 8 11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80155">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
