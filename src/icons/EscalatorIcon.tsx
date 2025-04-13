import React from "react";

export const EscalatorIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74788)">
<path d="M19.5 5H16.828C16.2976 5.00011 15.789 5.2109 15.414 5.586L7 14H4.5C3.83696 14 3.20107 14.2634 2.73223 14.7322C2.26339 15.2011 2 15.837 2 16.5C2 17.163 2.26339 17.7989 2.73223 18.2678C3.20107 18.7366 3.83696 19 4.5 19H8.172C8.70239 18.9999 9.21101 18.7891 9.586 18.414L18 10H19.5C20.163 10 20.7989 9.73661 21.2678 9.26777C21.7366 8.79893 22 8.16304 22 7.5C22 6.83696 21.7366 6.20107 21.2678 5.73223C20.7989 5.26339 20.163 5 19.5 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74788">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
