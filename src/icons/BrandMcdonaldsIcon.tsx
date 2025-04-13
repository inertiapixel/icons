import React from "react";

export const BrandMcdonaldsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81957)">
<path d="M20 20C20 16.048 19.034 4 15.962 4C12.89 4 12 13.087 12 18.756C12 13.087 11.104 4 8.038 4C4.973 4 4 16.048 4 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81957">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
