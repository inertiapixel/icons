import React from "react";

export const BracketsAngleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82937)">
<path d="M8 4H8.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.453 6.47266L3 11.9987L8 19.9987"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4L21 12L19.083 15.067"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.535 17.543L16 19.999"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82937">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
