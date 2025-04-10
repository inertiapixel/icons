import React from "react";

export const BathOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_84044)">
<path d="M16 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13V16C21 16.311 20.964 16.614 20.897 16.904M19.287 19.282C18.6165 19.7506 17.818 20.0012 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12H12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12V6M7.178 3.176C7.43 3.063 7.708 3 8 3H11V5.25" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 21L5 19.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21L19 19.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84044">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
