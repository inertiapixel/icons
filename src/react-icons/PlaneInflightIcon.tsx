import React from "react";

export const PlaneInflightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66274)">
<path d="M15 11.0859H20C20.5304 11.0859 21.0391 11.2967 21.4142 11.6717C21.7893 12.0468 22 12.5555 22 13.0859C22 13.6164 21.7893 14.1251 21.4142 14.5002C21.0391 14.8752 20.5304 15.0859 20 15.0859H5L2 9.08594H5L7 11.0859H10L8 4.08594H11L15 11.0859Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66274">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
