import React from "react";

export const EscalatorUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74791)">
<path d="M19.5 7H16.828C16.2976 7.00011 15.789 7.2109 15.414 7.586L7 16H4.5C3.83696 16 3.20107 16.2634 2.73223 16.7322C2.26339 17.2011 2 17.837 2 18.5C2 19.163 2.26339 19.7989 2.73223 20.2678C3.20107 20.7366 3.83696 21 4.5 21H8.172C8.70239 20.9999 9.21101 20.7891 9.586 20.414L18 12H19.5C20.163 12 20.7989 11.7366 21.2678 11.2678C21.7366 10.7989 22 10.163 22 9.5C22 8.83696 21.7366 8.20107 21.2678 7.73223C20.7989 7.26339 20.163 7 19.5 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6L6 3L9 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74791">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
