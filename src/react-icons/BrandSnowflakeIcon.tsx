import React from "react";

export const BrandSnowflakeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81551)">
<path d="M14 21V15.5L18.5 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21V15.5L5.5 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 14.5L8 12L3.5 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 9.5L16 12L20.5 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3V8.5L5.5 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3V8.5L18.5 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11L13 12L12 13L11 12L12 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81551">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
