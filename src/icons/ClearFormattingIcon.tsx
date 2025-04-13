import React from "react";

export const ClearFormattingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78714)">
<path d="M17 15L21 19M21 15L17 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6V5H18V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 5L9 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78714">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
