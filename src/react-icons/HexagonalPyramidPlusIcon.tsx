import React from "react";

export const HexagonalPyramidPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71871)">
<path d="M18.6424 12.0407L12.8384 2.4577C12.7483 2.31732 12.6243 2.20185 12.4779 2.12188C12.3314 2.04191 12.1673 2 12.0004 2C11.8336 2 11.6694 2.04191 11.523 2.12188C11.3766 2.20185 11.2526 2.31732 11.1624 2.4577L3.31644 15.4117C3.07047 15.7938 2.96282 16.2486 3.0114 16.7004C3.05998 17.1521 3.26187 17.5737 3.58344 17.8947L6.11044 20.4177C6.48444 20.7907 6.99044 21.0007 7.51844 21.0007H12.5004"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2L7 20.9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2L15.304 14.489"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71871">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
