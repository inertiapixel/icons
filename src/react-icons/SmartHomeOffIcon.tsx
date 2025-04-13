import React from "react";

export const SmartHomeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63536)">
<path d="M7.09725 7.12477L5.06025 8.70977C4.73969 8.95905 4.48034 9.2783 4.30201 9.64312C4.12367 10.0079 4.03106 10.4087 4.03125 10.8148V18.0148C4.03125 18.5452 4.24196 19.0539 4.61704 19.429C4.99211 19.8041 5.50082 20.0148 6.03125 20.0148H18.0312C18.5903 20.0148 19.0953 19.7858 19.4583 19.4168M20.0303 15.9998V10.8148C20.0303 9.99177 19.6502 9.21477 19.0002 8.70977L13.6672 4.56177C13.1992 4.19768 12.6232 4 12.0303 4C11.4373 4 10.8613 4.19768 10.3932 4.56177L9.36425 5.36177"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.332 15.345C13.119 16.321 9.997 16.205 8 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63536">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
