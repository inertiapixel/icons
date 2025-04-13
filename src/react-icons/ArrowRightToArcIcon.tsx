import React from "react";

export const ArrowRightToArcIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85166)">
<path d="M3 12H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 8L15 12L11 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85166">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
