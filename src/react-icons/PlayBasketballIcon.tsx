import React from "react";

export const PlayBasketballIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66220)">
<path d="M10 4C10 4.26522 10.1054 4.51957 10.2929 4.70711C10.4804 4.89464 10.7348 5 11 5C11.2652 5 11.5196 4.89464 11.7071 4.70711C11.8946 4.51957 12 4.26522 12 4C12 3.73478 11.8946 3.48043 11.7071 3.29289C11.5196 3.10536 11.2652 3 11 3C10.7348 3 10.4804 3.10536 10.2929 3.29289C10.1054 3.48043 10 3.73478 10 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21L8 18L8.75 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 21V17L10 14L10.5 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12L6 9L10.5 8L14 11L18 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 16C18.6326 16 18.7598 15.9473 18.8536 15.8536C18.9473 15.7598 19 15.6326 19 15.5C19 15.3674 18.9473 15.2402 18.8536 15.1464C18.7598 15.0527 18.6326 15 18.5 15C18.3674 15 18.2402 15.0527 18.1464 15.1464C18.0527 15.2402 18 15.3674 18 15.5C18 15.6326 18.0527 15.7598 18.1464 15.8536C18.2402 15.9473 18.3674 16 18.5 16Z" fill="black"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66220">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
