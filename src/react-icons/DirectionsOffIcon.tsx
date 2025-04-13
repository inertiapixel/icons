import React from "react";

export const DirectionsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75328)">
<path d="M12 21V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8V9H9M13 9H19L21 7L19 5H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14V17H6L4 15L6 13H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75328">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
