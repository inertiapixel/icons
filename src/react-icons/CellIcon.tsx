import React from "react";

export const CellIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79840)">
<path d="M8 4L4 6V11L8 13L12 11V6L8 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11L16 13L20 11V6L16 4L12 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13V18L12 20L16 18V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79840">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
