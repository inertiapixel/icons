import React from "react";

export const RepeatOnceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65255)">
<path d="M4 12V9C4 8.20435 4.31607 7.44129 4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6H20M20 6L17 3M20 6L17 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12V15C20 15.7956 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7956 18 17 18H4M4 18L7 21M4 18L7 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11L12 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65255">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
