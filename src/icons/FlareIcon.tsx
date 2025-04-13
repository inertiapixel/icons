import React from "react";

export const FlareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73459)">
<path d="M12 3L15 9L21 12L15 15L12 21L9 15L3 12L9 9L12 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73459">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
