import React from "react";

export const WifiIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59859)">
<path d="M12 18H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.17188 15.1711C9.92199 14.4213 10.9392 14 11.9999 14C13.0605 14 14.0778 14.4213 14.8279 15.1711"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.34375 12.3433C7.08662 11.6004 7.96856 11.0111 8.93919 10.609C9.90982 10.2069 10.9501 10 12.0008 10C13.0514 10 14.0917 10.2069 15.0623 10.609C16.0329 11.0111 16.9149 11.6004 17.6577 12.3433"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.51562 9.51525C8.20162 4.82825 15.7996 4.82825 20.5156 9.51525"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59859">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
