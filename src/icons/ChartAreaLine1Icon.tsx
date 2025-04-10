import React from "react";

export const ChartAreaLine1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_79770)">
<path d="M4 19L8 13L12 15L16 10L20 14V19H4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12L7 8L11 10L16 4L20 8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79770">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
