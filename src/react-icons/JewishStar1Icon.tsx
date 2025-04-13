import React from "react";

export const JewishStar1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71191)">
<path d="M12 2L15 7H21L18 12L21 17H15L12 22L9 17H3L6 12L3 7H9L12 2Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71191">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
