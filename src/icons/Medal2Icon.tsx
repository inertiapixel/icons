import React from "react";

export const Medal2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_69003)">
<path d="M9 3H15L18 10L12 12L6 10L9 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L9 3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11L12 3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19.5L9 21L9.5 17.5L7.5 15.5L10.5 15L12 12L13.5 15L16.5 15.5L14.5 17.5L15 21L12 19.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69003">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
