import React from "react";

export const CornerDownLeftDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77790)">
<path d="M19 5V11C19 11.7956 18.6839 12.5587 18.1213 13.1213C17.5587 13.6839 16.7956 14 16 14H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10L9 14L13 18M8 10L4 14L8 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77790">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
