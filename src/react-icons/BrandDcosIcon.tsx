import React from "react";

export const BrandDcosIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82488)">
<path d="M21 6L3 18V6M21 6H3M21 6L12 20L3 6M21 6V16L3 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82488">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
