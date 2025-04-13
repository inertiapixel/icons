import React from "react";

export const ChessRook1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79482)">
<path d="M8 16L6.553 16.724C6.38692 16.807 6.24722 16.9346 6.14955 17.0925C6.05188 17.2504 6.0001 17.4323 6 17.618V20H18V17.618C17.9999 17.4323 17.9481 17.2504 17.8504 17.0925C17.7528 16.9346 17.6131 16.807 17.447 16.724L16 16H8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16L9 7H15L16 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 4L6.5 7H17.5L18 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 4V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 4V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79482">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
