import React from "react";

export const StairsDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62490)">
<path d="M22 21H17V16H12V11H7V6H2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 3V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7L18 10L21 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62490">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
