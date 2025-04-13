import React from "react";

export const GifIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72878)">
<path d="M8 8H6C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8V12H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 8H16V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72878">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
