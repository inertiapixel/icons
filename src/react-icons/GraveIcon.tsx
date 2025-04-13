import React from "react";

export const GraveIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72669)">
<path d="M5 21V19C5 18.2044 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21H5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16V11H6V7H10V3H14V7H18V11H14V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72669">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
