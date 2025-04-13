import React from "react";

export const TextDirectionLtrIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61842)">
<path d="M5 19H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L19 19L17 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H9.5C8.57174 4 7.6815 4.36875 7.02513 5.02513C6.36875 5.6815 6 6.57174 6 7.5C6 8.42826 6.36875 9.3185 7.02513 9.97487C7.6815 10.6313 8.57174 11 9.5 11H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 15V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61842">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
