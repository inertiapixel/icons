import React from "react";

export const CupOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77470)">
<path d="M8 8H5V11H11M15 11H19V8H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 11L17.177 13.154M16.652 16.651L16 21H8L6.5 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8V7C6 6.704 6.064 6.423 6.18 6.17M9 5H16C16.5304 5 17.0391 5.21071 17.4142 5.58579C17.7893 5.96086 18 6.46957 18 7V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 5V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77470">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
