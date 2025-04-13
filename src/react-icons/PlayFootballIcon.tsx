import React from "react";

export const PlayFootballIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66201)">
<path d="M11 4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17L8 18L8.75 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 21V17L10 14L11 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12V9L11 8L14 11L17 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5 20C19.6326 20 19.7598 19.9473 19.8536 19.8536C19.9473 19.7598 20 19.6326 20 19.5C20 19.3674 19.9473 19.2402 19.8536 19.1464C19.7598 19.0527 19.6326 19 19.5 19C19.3674 19 19.2402 19.0527 19.1464 19.1464C19.0527 19.2402 19 19.3674 19 19.5C19 19.6326 19.0527 19.7598 19.1464 19.8536C19.2402 19.9473 19.3674 20 19.5 20Z"   strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66201">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
