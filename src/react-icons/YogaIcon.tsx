import React from "react";

export const YogaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59454)">
<path d="M11 4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 20H8L9.5 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 20L16 15H11L12 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10L8 9L12 8L16 9.5L20 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59454">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
