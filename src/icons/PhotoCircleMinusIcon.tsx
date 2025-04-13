import React from "react";

export const PhotoCircleMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66644)">
<path d="M15 8H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.475 15.035C20.9617 13.6764 21.1145 12.2207 20.9205 10.7906C20.7266 9.36054 20.1916 7.99808 19.3607 6.81814C18.5298 5.63819 17.4273 4.67537 16.1463 4.01086C14.8652 3.34635 13.4431 2.99965 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C2.99996 13.2261 3.25045 14.4394 3.73613 15.5652C4.2218 16.6911 4.9324 17.7058 5.82433 18.5472C6.71625 19.3885 7.77069 20.0388 8.92294 20.458C10.0752 20.8772 11.3009 21.0565 12.525 20.985"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15.0018L8 11.0018C8.928 10.1088 10.072 10.1088 11 11.0018L15 15.0018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14.0018L15 13.0018C15.928 12.1088 17.072 12.1088 18 13.0018L20 15.0018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66644">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
