import React from "react";

export const PlayVolleyballIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66188)">
<path d="M13 4C13 4.26522 13.1054 4.51957 13.2929 4.70711C13.4804 4.89464 13.7348 5 14 5C14.2652 5 14.5196 4.89464 14.7071 4.70711C14.8946 4.51957 15 4.26522 15 4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 10C20.6326 10 20.7598 9.94732 20.8536 9.85355C20.9473 9.75979 21 9.63261 21 9.5C21 9.36739 20.9473 9.24021 20.8536 9.14645C20.7598 9.05268 20.6326 9 20.5 9C20.3674 9 20.2402 9.05268 20.1464 9.14645C20.0527 9.24021 20 9.36739 20 9.5C20 9.63261 20.0527 9.75979 20.1464 9.85355C20.2402 9.94732 20.3674 10 20.5 10Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 16L7 17L7.5 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 21L14 15.5L8.5 12L12 8L15 12L19 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66188">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
