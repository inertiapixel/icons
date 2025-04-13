import React from "react";

export const SquareRoundedLetterA1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62763)">
<path d="M10 16V10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3C19.2 3 21 4.8 21 12C21 19.2 19.2 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62763">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
