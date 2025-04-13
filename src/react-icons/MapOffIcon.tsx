import React from "react";

export const MapOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69511)">
<path d="M8.32 4.34L9 4L15 7L21 4V17M18.33 18.335L15 20L9 17L3 20V7L5.665 5.667"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4V5M9 9V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7V11M15 15V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69511">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
