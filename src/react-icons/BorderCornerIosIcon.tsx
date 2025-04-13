import React from "react";

export const BorderCornerIosIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83448)">
<path d="M4 20C4 13.441 4 10.162 5.628 7.838C6.23014 6.97808 6.97808 6.23014 7.838 5.628C10.162 4 13.44 4 20 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83448">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
