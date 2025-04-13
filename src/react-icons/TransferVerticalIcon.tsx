import React from "react";

export const TransferVerticalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61103)">
<path d="M10 4V20L4 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20V4L20 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61103">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
