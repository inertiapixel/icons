import React from "react";

export const FilterCheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_73816)">
<path d="M11.18 20.274L9 21V12.5L4.52 7.572C4.18545 7.20393 4.00005 6.7244 4 6.227V4H20V6.172C19.9999 6.70239 19.7891 7.21101 19.414 7.586L15 12V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19L17 21L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73816">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
