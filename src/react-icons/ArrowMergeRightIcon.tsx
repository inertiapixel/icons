import React from "react";

export const ArrowMergeRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85278)">
<path d="M16 8L12 4L8 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 18C14 16.667 12 13.333 12 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85278">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
