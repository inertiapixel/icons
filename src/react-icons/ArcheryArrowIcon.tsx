import React from "react";

export const ArcheryArrowIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85708)">
<path d="M14 7V10H17L20 7H17V4L14 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10L5 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 15V19H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85708">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
