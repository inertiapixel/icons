import React from "react";

export const ArrowWaveLeftUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_85037)">
<path d="M7 10H3V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12.001C20.113 10.716 18.52 9.96805 17 10.001C15.48 9.96805 13.887 10.716 13 12.001C12.113 13.285 10.52 14.034 9 14.001C7.48 14.034 6 13.001 5 12.001L3 10.001" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85037">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
