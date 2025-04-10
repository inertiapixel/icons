import React from "react";

export const EscalatorDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_74796)">
<path d="M4.5 7H7.233C7.72671 7.00012 8.20293 7.18284 8.57 7.513L18 16H19.5C20.163 16 20.7989 16.2634 21.2678 16.7322C21.7366 17.2011 22 17.837 22 18.5C22 19.163 21.7366 19.7989 21.2678 20.2678C20.7989 20.7366 20.163 21 19.5 21H16.767C16.2733 20.9999 15.7971 20.8172 15.43 20.487L6 12H4.5C3.83696 12 3.20107 11.7366 2.73223 11.2678C2.26339 10.7989 2 10.163 2 9.5C2 8.83696 2.26339 8.20107 2.73223 7.73223C3.20107 7.26339 3.83696 7 4.5 7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 3V10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7L18 10L21 7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74796">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
