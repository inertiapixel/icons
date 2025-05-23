import React from "react";

export const SkiJumpingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63573)">
<path d="M11 3C11 3.26522 11.1054 3.51957 11.2929 3.70711C11.4804 3.89464 11.7348 4 12 4C12.2652 4 12.5196 3.89464 12.7071 3.70711C12.8946 3.51957 13 3.26522 13 3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17.5L12 13V7L17 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17.5L12 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.1016 21.5809L21.8636 7.07888C22.0874 6.59815 22.1112 6.04821 21.9297 5.54995C21.7482 5.0517 21.3762 4.64594 20.8956 4.42188"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.89817 21.5819L2.13617 7.07888C1.91231 6.59815 1.88852 6.04821 2.07005 5.54995C2.25157 5.0517 2.62354 4.64594 3.10417 4.42188"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 11L12 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63573">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
