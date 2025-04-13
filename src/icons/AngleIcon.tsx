import React from "react";

export const AngleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85840)">
<path d="M21 19H3L12 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.6133 15.1719H20.6283"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5156 11.7695H19.5306"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7148 8.67188H17.7298"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4141 5.97266H15.4291"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85840">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
