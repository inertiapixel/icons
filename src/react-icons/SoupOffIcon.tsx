import React from "react";

export const SoupOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63301)">
<path d="M3 19H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11H21C21 12.691 20.475 14.26 19.58 15.552M17.546 17.584C16.2105 18.5086 14.6243 19.0027 13 19H11C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 5V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63301">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
