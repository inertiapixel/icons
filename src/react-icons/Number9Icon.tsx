import React from "react";

export const Number9Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67311)">
<path d="M16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V9C8 10.0609 8.42143 11.0783 9.17157 11.8284C9.92172 12.5786 10.9391 13 12 13C13.0609 13 14.0783 12.5786 14.8284 11.8284C15.5786 11.0783 16 10.0609 16 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16C8 17.0609 8.42143 18.0783 9.17157 18.8284C9.92172 19.5786 10.9391 20 12 20C13.0609 20 14.0783 19.5786 14.8284 18.8284C15.5786 18.0783 16 17.0609 16 16V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67311">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
