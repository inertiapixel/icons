import React from "react";

export const EggsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_74891)">
<path d="M13 22C10 22 8.132 19.882 8 17C8 14 10 12 13 12C17 12 21.01 14.5 21 17C21 19.5 17 22 13 22Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18C4.97 17.804 3 15.691 3 12.62C3 8.313 5.75 3.995 8.5 4C11.114 4 13.748 7.915 14 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74891">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
