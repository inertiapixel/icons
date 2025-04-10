import React from "react";

export const ListSearchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70347)">
<path d="M11 15C11 16.0609 11.4214 17.0783 12.1716 17.8284C12.9217 18.5786 13.9391 19 15 19C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15C19 13.9391 18.5786 12.9217 17.8284 12.1716C17.0783 11.4214 16.0609 11 15 11C13.9391 11 12.9217 11.4214 12.1716 12.1716C11.4214 12.9217 11 13.9391 11 15Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 18.5L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12H8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 18H8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70347">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
