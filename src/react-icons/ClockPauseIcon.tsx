import React from "react";

export const ClockPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78479)">
<path d="M20.9422 13.0185C21.1536 11.1628 20.7824 9.28734 19.8801 7.65207C18.9778 6.01679 17.5891 4.70273 15.9065 3.89205C14.224 3.08136 12.3309 2.81422 10.4897 3.12764C8.64847 3.44107 6.95039 4.31954 5.63082 5.64127C4.31126 6.96301 3.43557 8.66253 3.12517 10.5042C2.81477 12.346 3.08503 14.2386 3.89847 15.9198C4.71192 17.6011 6.02826 18.9876 7.66502 19.8872C9.30177 20.7868 11.1779 21.1549 13.0332 20.9405"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78479">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
