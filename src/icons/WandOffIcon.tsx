import React from "react";

export const WandOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60117)">
<path d="M10.5 10.5L3 18L6 21L13.5 13.5M15.5 11.5L21 6L18 3L12.5 8.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6L18 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.43359 4.395C8.78359 4.035 9.00059 3.543 9.00059 3C9.00059 3.53043 9.21131 4.03914 9.58638 4.41421C9.96145 4.78929 10.4702 5 11.0006 5C10.4466 5 9.94559 5.225 9.58359 5.589" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.418 14.41C18.778 14.05 19 13.55 19 13C19 13.5304 19.2107 14.0391 19.5858 14.4142C19.9608 14.7893 20.4695 15 21 15C20.445 15 19.944 15.226 19.581 15.59" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60117">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
