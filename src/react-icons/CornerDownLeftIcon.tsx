import React from "react";

export const CornerDownLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77787)">
<path d="M18 6V12C18 12.7956 17.6839 13.5587 17.1213 14.1213C16.5587 14.6839 15.7956 15 15 15H5M5 15L9 11M5 15L9 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77787">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
