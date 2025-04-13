import React from "react";

export const KeyboardHideIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71135)">
<path d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V13C22 13.5304 21.7893 14.0391 21.4142 14.4142C21.0391 14.7893 20.5304 15 20 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 7V7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 7V7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7V7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 7V7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21L12 19L14 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71135">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
