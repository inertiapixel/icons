import React from "react";

export const CornerUpLeftDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77748)">
<path d="M19 18V12C19 11.2044 18.6839 10.4413 18.1213 9.87868C17.5587 9.31607 16.7956 9 16 9H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 13L9 9L13 5M8 13L4 9L8 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77748">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
