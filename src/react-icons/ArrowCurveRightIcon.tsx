import React from "react";

export const ArrowCurveRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85466)">
<path d="M10 7L14 3L18 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3V7.394C14.0001 8.50318 13.7263 9.59522 13.2029 10.5732C12.6796 11.5511 11.9229 12.3847 11 13C10.0771 13.6153 9.3204 14.4489 8.79705 15.4268C8.27371 16.4048 7.99992 17.4968 8 18.606V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85466">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
