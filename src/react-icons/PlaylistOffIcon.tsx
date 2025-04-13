import React from "react";

export const PlaylistOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66140)">
<path d="M14 14C13.4067 14 12.8266 14.1759 12.3333 14.5056C11.8399 14.8352 11.4554 15.3038 11.2284 15.8519C11.0013 16.4001 10.9419 17.0033 11.0576 17.5853C11.1734 18.1672 11.4591 18.7018 11.8787 19.1213C12.2982 19.5409 12.8328 19.8266 13.4147 19.9424C13.9967 20.0581 14.5999 19.9987 15.1481 19.7716C15.6962 19.5446 16.1648 19.1601 16.4944 18.6667C16.8241 18.1734 17 17.5933 17 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13V4H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 5H9M5 5H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66140">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
