import React from "react";

export const ArrowBarUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85549)">
<path d="M12 4V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4L16 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4L8 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85549">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
