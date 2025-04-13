import React from "react";

export const CornerLeftDownDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77776)">
<path d="M18 4H12C11.2044 4 10.4413 4.31607 9.87868 4.87868C9.31607 5.44129 9 6.20435 9 7V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10L9 14L5 10M13 15L9 19L5 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77776">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
