import React from "react";

export const DeviceAirtagIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76830)">
<path d="M4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15V15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15C15 13.4087 14.3679 11.8826 13.2426 10.7574C12.1174 9.63214 10.5913 9 9 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15C12 14.2044 11.6839 13.4413 11.1213 12.8787C10.5587 12.3161 9.79565 12 9 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76830">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
