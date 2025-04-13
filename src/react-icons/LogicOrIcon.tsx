import React from "react";

export const LogicOrIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69915)">
<path d="M22 12H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 5C18.667 7.1 18.667 17.6 8 19C9.806 14.333 9.806 9.667 8 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69915">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
