import React from "react";

export const GenderDemiboyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72998)">
<path d="M5 14C5 15.3261 5.52678 16.5979 6.46447 17.5355C7.40215 18.4732 8.67392 19 10 19C11.3261 19 12.5979 18.4732 13.5355 17.5355C14.4732 16.5979 15 15.3261 15 14C15 12.6739 14.4732 11.4021 13.5355 10.4645C12.5979 9.52678 11.3261 9 10 9C8.67392 9 7.40215 9.52678 6.46447 10.4645C5.52678 11.4021 5 12.6739 5 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0016 5L13.6016 10.4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 5H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72998">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
