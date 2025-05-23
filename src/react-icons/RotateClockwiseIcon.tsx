import React from "react";

export const RotateClockwiseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64889)">
<path d="M4.05078 10.9993C4.30367 9.07007 5.251 7.29911 6.71546 6.01795C8.17992 4.7368 10.0611 4.03328 12.0068 4.0391C13.9526 4.04492 15.8295 4.75967 17.2863 6.04956C18.7431 7.33945 19.6798 9.11605 19.9212 11.0468C20.1625 12.9775 19.6919 14.93 18.5975 16.5388C17.503 18.1476 15.8598 19.3024 13.9753 19.787C12.0909 20.2716 10.0944 20.0528 8.35966 19.1715C6.6249 18.2903 5.27078 16.807 4.55078 14.9993M4.05078 19.9993V14.9993H9.05078"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64889">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
