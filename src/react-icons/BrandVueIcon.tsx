import React from "react";

export const BrandVueIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81217)">
<path d="M16.5 4L12 12L7.5 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 4L12 20L21 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81217">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
