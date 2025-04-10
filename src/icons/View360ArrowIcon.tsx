import React from "react";

export const View360ArrowIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60345)">
<path d="M17 15.328C19.414 14.61 21 13.388 21 12C21 9.79 16.97 8 12 8C7.03 8 3 9.79 3 12C3 14.21 7.03 16 12 16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13L12 16L9 19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60345">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
