import React from "react";

export const BrandEmberIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82351)">
<path d="M3 12.9576C11.466 14.6046 14.112 11.7616 15.17 10.6636C17.286 8.46759 15.17 4.07459 12.524 5.17359C9.88 6.26959 6.174 12.8596 9.35 17.2516C11.466 20.1796 15.35 19.4296 21 14.9996"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82351">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
