import React from "react";

export const ArrowBackIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_85616)">
<path d="M9 11L5 15M5 15L9 19M5 15H16C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 9.93913 19.5786 8.92172 18.8284 8.17157C18.0783 7.42143 17.0609 7 16 7H15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85616">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
