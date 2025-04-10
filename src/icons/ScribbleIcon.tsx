import React from "react";

export const ScribbleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64470)">
<path d="M3 15C5 18 7 19 10 19C13 19 17 16 17 12C17 8 14 5 11 5C8 5 6 6.5 6 9C6 11.5 8 14 12 14C16 14 20.408 11.547 22 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64470">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
