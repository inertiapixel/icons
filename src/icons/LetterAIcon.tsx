import React from "react";

export const LetterAIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70701)">
<path d="M7 20V8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4H13C14.0609 4 15.0783 4.42143 15.8284 5.17157C16.5786 5.92172 17 6.93913 17 8V20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70701">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
