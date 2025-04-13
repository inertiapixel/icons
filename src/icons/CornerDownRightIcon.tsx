import React from "react";

export const CornerDownRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77780)">
<path d="M6 6V12C6 12.7956 6.31607 13.5587 6.87868 14.1213C7.44129 14.6839 8.20435 15 9 15H19M19 15L15 11M19 15L15 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77780">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
