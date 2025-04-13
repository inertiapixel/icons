import React from "react";

export const BrandDisqusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82423)">
<path d="M11.847 21C9.588 21 7.524 20.333 5.928 19H2L3.708 15.734C3.163 14.56 2.949 13.288 2.95 12C2.95 7.03 6.79 3 11.848 3C16.9 3 21 7.03 21 12C21 16.972 16.902 21 11.847 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.485 15H10V9H11.485C13.597 9 15 9.823 15 11.981V12.016C15 14.196 13.597 15 11.485 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82423">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
