import React from "react";

export const CornerLeftUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77766)">
<path d="M18 18H12C11.2044 18 10.4413 17.6839 9.87868 17.1213C9.31607 16.5587 9 15.7956 9 15V5M9 5L5 9M9 5L13 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77766">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
