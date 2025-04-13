import React from "react";

export const StackPushIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62499)">
<path d="M6 10L4 11L12 15L20 11L18 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15L12 19L20 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8L12 11L9 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62499">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
