import React from "react";

export const VsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60173)">
<path d="M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14.25C14 14.664 14.336 15 14.75 15H16C16.2652 15 16.5196 14.8946 16.7071 14.7071C16.8946 14.5196 17 14.2652 17 14V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12H15C14.7348 12 14.4804 11.8946 14.2929 11.7071C14.1054 11.5196 14 11.2652 14 11V10C14 9.73478 14.1054 9.48043 14.2929 9.29289C14.4804 9.10536 14.7348 9 15 9H16.25C16.4489 9 16.6397 9.07902 16.7803 9.21967C16.921 9.36032 17 9.55109 17 9.75" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9L9 15L11 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60173">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
