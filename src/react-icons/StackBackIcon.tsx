import React from "react";

export const StackBackIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62529)">
<path d="M4 8L12 12L20 8L12 4L4 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16L8 14L4 16L12 20L20 16L16 14L12 16Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 10L4 12L8 14M16 14L20 12L16 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62529">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
