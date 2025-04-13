import React from "react";

export const DeviceNintendoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75991)">
<path d="M10 20V4H7C5.93913 4 4.92172 4.42143 4.17157 5.17157C3.42143 5.92172 3 6.93913 3 8V16C3 17.0609 3.42143 18.0783 4.17157 18.8284C4.92172 19.5786 5.93913 20 7 20H10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20V4H17C18.0609 4 19.0783 4.42143 19.8284 5.17157C20.5786 5.92172 21 6.93913 21 8V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 16.5C18.0523 16.5 18.5 16.0523 18.5 15.5C18.5 14.9477 18.0523 14.5 17.5 14.5C16.9477 14.5 16.5 14.9477 16.5 15.5C16.5 16.0523 16.9477 16.5 17.5 16.5Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 9.5C7.05228 9.5 7.5 9.05228 7.5 8.5C7.5 7.94772 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5C5.5 9.05228 5.94772 9.5 6.5 9.5Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75991">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
