import React from "react";

export const AdjustmentsAltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86461)">
<path d="M4 8H8V12H4V8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 4V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14H14V18H10V14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5H20V9H16V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 4V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86461">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
