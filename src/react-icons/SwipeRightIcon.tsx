import React from "react";

export const SwipeRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62220)">
<path d="M4 12C4 10.9391 4.42143 9.92172 5.17157 9.17157C5.92172 8.42143 6.93913 8 8 8C9.06087 8 10.0783 8.42143 10.8284 9.17157C11.5786 9.92172 12 10.9391 12 12C12 13.0609 11.5786 14.0783 10.8284 14.8284C10.0783 15.5786 9.06087 16 8 16C6.93913 16 5.92172 15.5786 5.17157 14.8284C4.42143 14.0783 4 13.0609 4 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 15L20 12L17 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62220">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
