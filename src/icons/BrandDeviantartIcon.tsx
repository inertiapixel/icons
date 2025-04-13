import React from "react";

export const BrandDeviantartIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82450)">
<path d="M18 3V7L14.143 13H18V17H11.571L9 21H6V17L9.857 11H6V7H12.429L15 3H18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82450">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
