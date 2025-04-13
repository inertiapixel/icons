import React from "react";

export const BrandCodepenIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82590)">
<path d="M3 15L12 21L21 15L12 9L3 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9L12 15L21 9L12 3L3 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 9V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82590">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
