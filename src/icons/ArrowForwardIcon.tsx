import React from "react";

export const ArrowForwardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_85382)">
<path d="M15 11L19 15M19 15L15 19M19 15H8C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11C4 9.93913 4.42143 8.92172 5.17157 8.17157C5.92172 7.42143 6.93913 7 8 7H9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85382">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
