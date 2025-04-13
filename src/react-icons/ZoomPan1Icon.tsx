import React from "react";

export const ZoomPan1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59309)">
<path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17L14.5 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 4L12 2L14 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 10L22 12L20 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10L2 12L4 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20L12 22L14 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59309">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
