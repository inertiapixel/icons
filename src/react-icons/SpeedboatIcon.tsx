import React from "react";

export const SpeedboatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63252)">
<path d="M3 17H16.4C16.8949 17.0002 17.3822 16.8779 17.8184 16.6441C18.2546 16.4103 18.6262 16.0722 18.9 15.66L22 11H15.77C15.2594 11.0007 14.7536 11.0991 14.28 11.29L10.72 12.71C10.2464 12.9009 9.74062 12.9993 9.23 13H5.5H4.5L3 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 13L7.5 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8H14L16 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63252">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
