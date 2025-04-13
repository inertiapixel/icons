import React from "react";

export const CornerDownRightDoubleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77783)">
<path d="M4 5V11C4 11.7956 4.31607 12.5587 4.87868 13.1213C5.44129 13.6839 6.20435 14 7 14H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10L14 14L10 18M15 10L19 14L15 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77783">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
