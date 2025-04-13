import React from "react";

export const GenderThirdIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72928)">
<path d="M11 12C11 13.3261 11.5268 14.5979 12.4645 15.5355C13.4021 16.4732 14.6739 17 16 17C17.3261 17 18.5979 16.4732 19.5355 15.5355C20.4732 14.5979 21 13.3261 21 12C21 10.6739 20.4732 9.40215 19.5355 8.46447C18.5979 7.52678 17.3261 7 16 7C14.6739 7 13.4021 7.52678 12.4645 8.46447C11.5268 9.40215 11 10.6739 11 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12L3 8V16L8 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72928">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
