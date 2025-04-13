import React from "react";

export const BrandMeetupIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81944)">
<path d="M5.45312 10.82C6.38813 8.657 8.49813 7 10.9981 7C13.1021 7 13.8421 8.915 12.9981 11L10.9981 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.981 7L3 16.914"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10.9993C13.937 8.83934 16.071 7.19734 18.42 7.02734C20.524 7.02734 21.548 8.73334 20.704 10.8193L18.25 16.9133C17.397 18.5893 19 19.4993 21 18.9993"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81944">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
