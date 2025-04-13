import React from "react";

export const WaveSineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59935)">
<path d="M20.9986 12H18.9986C18.1046 12 17.3366 11.143 17.2376 10C16.9416 6.55 16.4886 4 14.4886 4C12.4886 4 11.9886 7.582 11.9886 12C11.9886 16.418 11.4886 20 9.48856 20C7.48856 20 7.03656 17.453 6.73956 14C6.63956 12.853 5.87256 12 4.97656 12H2.97656"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59935">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
