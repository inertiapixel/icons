import React from "react";

export const RotateIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64878)">
<path d="M19.9517 10.9993C19.6988 9.07007 18.7515 7.29911 17.287 6.01795C15.8226 4.7368 13.9414 4.03328 11.9956 4.0391C10.0499 4.04492 8.17294 4.75967 6.71617 6.04956C5.2594 7.33945 4.32267 9.11605 4.08133 11.0468C3.83999 12.9775 4.31058 14.93 5.40501 16.5388C6.49945 18.1476 8.14269 19.3024 10.0271 19.787C11.9116 20.2716 13.9081 20.0528 15.6428 19.1715C17.3776 18.2903 18.7317 16.807 19.4517 14.9993M19.9517 19.9993V14.9993H14.9517"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64878">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
