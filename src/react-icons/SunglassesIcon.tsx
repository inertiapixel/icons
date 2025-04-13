import React from "react";

export const SunglassesIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62270)">
<path d="M8 4H6L3 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H18L21 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 16.5C21 17.4283 20.6313 18.3185 19.9749 18.9749C19.3185 19.6313 18.4283 20 17.5 20C16.5717 20 15.6815 19.6313 15.0251 18.9749C14.3687 18.3185 14 17.4283 14 16.5V14H21V16.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16.5C10 17.4283 9.63125 18.3185 8.97487 18.9749C8.3185 19.6313 7.42826 20 6.5 20C5.57174 20 4.6815 19.6313 4.02513 18.9749C3.36875 18.3185 3 17.4283 3 16.5V14H10V16.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 14L8.5 18.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14L19.5 18.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62270">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
