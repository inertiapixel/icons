import React from "react";

export const StackPopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62505)">
<path d="M7 9.5L4 11L12 15L20 11L17 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15L12 19L20 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 7L12 4L15 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62505">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
