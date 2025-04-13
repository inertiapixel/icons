import React from "react";

export const LambdaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71053)">
<path d="M6 20L12.5 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 20C13 20 13 4 7 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71053">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
