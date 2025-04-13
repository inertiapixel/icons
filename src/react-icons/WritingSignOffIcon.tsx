import React from "react";

export const WritingSignOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59514)">
<path d="M3 19C6.333 17 8 15 8 13C8 10 7 10 6 10C5 10 3.968 11.085 4 13C4.034 15.048 5.658 15.877 6.5 17C8 19 9 19.5 10 18C10.667 17 11.167 16.167 11.5 15.5C12.5 17.833 13.833 19 15.5 19H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16V17L18 19L18.5 18.5M20 16V5C20 3.879 19.121 3 18 3C16.879 3 16 3.879 16 5V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 7H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59514">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
