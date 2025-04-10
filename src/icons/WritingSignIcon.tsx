import React from "react";

export const WritingSignIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_59509)">
<path d="M3 19C6.333 17 8 15 8 13C8 10 7 10 6 10C5 10 3.968 11.085 4 13C4.034 15.048 5.658 15.877 6.5 17C8 19 9 19.5 10 18C10.667 17 11.167 16.167 11.5 15.5C12.5 17.833 13.833 19 15.5 19H18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 17V5C20 3.879 19.121 3 18 3C16.879 3 16 3.879 16 5V17L18 19L20 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 7H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59509">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
