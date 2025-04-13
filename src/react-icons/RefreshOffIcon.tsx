import React from "react";

export const RefreshOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65325)">
<path d="M20 11.0004C19.8277 9.7612 19.3708 8.57874 18.6649 7.54575C17.959 6.51276 17.0235 5.65732 15.9316 5.04652C14.8397 4.43572 13.6212 4.08615 12.3715 4.02523C11.1219 3.96432 9.87512 4.1937 8.729 4.69541M6.319 6.31941C5.53794 7.08116 4.91918 7.99314 4.5 9.00041M4 5.00041V9.00041H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 13C4.20611 14.4832 4.81932 15.8801 5.77152 17.0358C6.72371 18.1915 7.97762 19.0606 9.39397 19.5466C10.8103 20.0326 12.3337 20.1164 13.7948 19.7889C15.2559 19.4613 16.5977 18.7351 17.671 17.691M20 16V15H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65325">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
