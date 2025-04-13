import React from "react";

export const BrandInertiaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82096)">
<path d="M12.5 8L16.5 12L12.5 16H17L21 12L17 8H12.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 8L7.5 12L3.5 16H8L12 12L8 8H3.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82096">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
