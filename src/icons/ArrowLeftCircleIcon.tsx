import React from "react";

export const ArrowLeftCircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_85362)">
<path d="M17 12H3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9L3 12L6 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12C17 12.5304 17.2107 13.0391 17.5858 13.4142C17.9609 13.7893 18.4696 14 19 14C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10C18.4696 10 17.9609 10.2107 17.5858 10.5858C17.2107 10.9609 17 11.4696 17 12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85362">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
