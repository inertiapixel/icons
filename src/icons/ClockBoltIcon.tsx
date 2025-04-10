import React from "react";

export const ClockBoltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78610)">
<path d="M20.9844 12.5303C21.0942 10.6696 20.6236 8.82063 19.6375 7.23885C18.6514 5.65707 17.1986 4.42047 15.4795 3.69983C13.7605 2.97919 11.8601 2.81007 10.0409 3.21583C8.2216 3.62158 6.57319 4.58219 5.32329 5.96499C4.07339 7.34779 3.28367 9.08455 3.06319 10.9354C2.84271 12.7863 3.20235 14.66 4.09244 16.2977C4.98253 17.9354 6.35915 19.2564 8.0322 20.0782C9.70524 20.8999 11.5922 21.1819 13.4324 20.8853" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L17 19H21L19 22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78610">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
