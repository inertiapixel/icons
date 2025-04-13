import React from "react";

export const BrandLinktreeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82004)">
<path d="M4 10H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 4.5L17.5 15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 15.5L17.5 4.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82004">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
