import React from "react";

export const TextSpellcheckIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61763)">
<path d="M5 15V7.5C5 6.57174 5.36875 5.6815 6.02513 5.02513C6.6815 4.36875 7.57174 4 8.5 4C9.42826 4 10.3185 4.36875 10.9749 5.02513C11.6313 5.6815 12 6.57174 12 7.5V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 10H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18L13 21L20 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61763">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
