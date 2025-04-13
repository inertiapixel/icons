import React from "react";

export const RollercoasterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64980)">
<path d="M3 21C4.16482 21 5.30011 20.6334 6.24504 19.9523C7.18998 19.2712 7.89666 18.3101 8.265 17.205L9 15C9.58244 13.2528 10.6999 11.7331 12.194 10.6562C13.6881 9.57936 15.4832 8.99993 17.325 9H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 9V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 21V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 9.5V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3H20V6H15V3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8L10 5L12 7.5L8 10.5L6.2 10L6 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64980">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
