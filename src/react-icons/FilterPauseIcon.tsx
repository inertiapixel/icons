import React from "react";

export const FilterPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73759)">
<path d="M12.97 19.677L9 21V12.5L4.52 7.572C4.18545 7.20393 4.00005 6.7244 4 6.227V4H20V6.172C19.9999 6.70239 19.7891 7.21101 19.414 7.586L15 12V13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73759">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
