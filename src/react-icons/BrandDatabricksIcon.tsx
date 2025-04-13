import React from "react";

export const BrandDatabricksIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82496)">
<path d="M3 17L12 22L21 17V14L12 19L3 14V11L12 16L21 11V8L12 13L3 8L12 3L17.418 6.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82496">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
