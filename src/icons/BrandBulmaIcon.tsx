import React from "react";

export const BrandBulmaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_82662)">
<path d="M5 16L6 7L11 2L17.5 8L14 12L19 17L11 22L5 16Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82662">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
