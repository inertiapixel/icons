import React from "react";

export const Stack21Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62540)">
<path d="M12 4L4 8L12 12L20 8L12 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12L12 16L20 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16L12 20L20 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62540">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
