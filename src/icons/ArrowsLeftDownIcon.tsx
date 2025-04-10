import React from "react";

export const ArrowsLeftDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_84922)">
<path d="M7 3L3 7L7 11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7H14C14.7956 7 15.5587 7.31607 16.1213 7.87868C16.6839 8.44129 17 9.20435 17 10V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 17L17 21L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84922">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
