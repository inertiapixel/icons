import React from "react";

export const TextDecreaseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61849)">
<path d="M4 19V8.5C4 7.57174 4.36875 6.6815 5.02513 6.02513C5.6815 5.36875 6.57174 5 7.5 5C8.42826 5 9.3185 5.36875 9.97487 6.02513C10.6313 6.6815 11 7.57174 11 8.5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 13H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61849">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
