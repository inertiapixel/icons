import React from "react";

export const FishIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73611)">
<path d="M16.69 7.44141C15.5977 8.70935 14.9979 10.3279 15 12.0014C15 13.7484 15.64 15.3464 16.699 16.5724"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9.50309C9.715 18.1501 16.75 19.7681 22 12.0011C16.75 4.24009 9.715 5.85909 2 14.5051"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5002 10.5C10.8332 11.5 10.8332 12.5 11.5002 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73611">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
