import React from "react";

export const BrandTidalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81359)">
<path d="M8.667 9.25L5.333 6L2 9.25L5.333 12.5L8.667 9.25ZM8.667 9.25L12 6L15.333 9.25M8.667 9.25L12 12.5M15.333 9.25L18.667 6L22 9.25L18.667 12.5L15.333 9.25ZM15.333 9.25L12 12.5M12 12.5L15.333 15.75L12 19L8.667 15.75L12 12.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81359">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
