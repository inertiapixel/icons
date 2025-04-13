import React from "react";

export const ChartArrowsVerticalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79757)">
<path d="M18 21V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15L12 12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10L18 7L21 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6L6 3L9 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 21V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79757">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
