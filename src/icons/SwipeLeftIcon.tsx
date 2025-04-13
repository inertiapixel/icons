import React from "react";

export const SwipeLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62225)">
<path d="M20 12C20 10.9391 19.5786 9.92172 18.8284 9.17157C18.0783 8.42143 17.0609 8 16 8C14.9391 8 13.9217 8.42143 13.1716 9.17157C12.4214 9.92172 12 10.9391 12 12C12 13.0609 12.4214 14.0783 13.1716 14.8284C13.9217 15.5786 14.9391 16 16 16C17.0609 16 18.0783 15.5786 18.8284 14.8284C19.5786 14.0783 20 13.0609 20 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15L4 12L7 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62225">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
