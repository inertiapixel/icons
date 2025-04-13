import React from "react";

export const Share3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64099)">
<path d="M13.0002 4V8C6.42519 9.028 3.98019 14.788 3.00019 20C2.96319 20.206 8.38419 14.038 13.0002 14V18L21.0002 11L13.0002 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64099">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
