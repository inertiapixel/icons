import React from "react";

export const PasswordIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67001)">
<path d="M12 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13L14 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11L14 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13L7 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11L7 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13L21 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11L21 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67001">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
