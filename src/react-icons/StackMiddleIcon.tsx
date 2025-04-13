import React from "react";

export const StackMiddleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62511)">
<path d="M16 10L20 8L12 4L4 8L8 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12L8 10L4 12L12 16L20 12L16 10L12 12Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14L4 16L12 20L20 16L16 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62511">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
