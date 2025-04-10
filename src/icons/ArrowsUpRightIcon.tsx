import React from "react";

export const ArrowsUpRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_84781)">
<path d="M17 21L21 17L17 13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17H10C9.20435 17 8.44129 16.6839 7.87868 16.1213C7.31607 15.5587 7 14.7956 7 14V3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 7L7 3L3 7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84781">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
