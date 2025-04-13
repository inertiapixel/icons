import React from "react";

export const IceCreamIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71455)">
<path d="M12 21.5V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 17H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 10.5L16 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14.5L16 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71455">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
