import React from "react";

export const CornerUpRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77738)">
<path d="M6 18V12C6 11.2044 6.31607 10.4413 6.87868 9.87868C7.44129 9.31607 8.20435 9 9 9H19M19 9L15 5M19 9L15 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77738">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
