import React from "react";

export const CornerRightUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77752)">
<path d="M6 18H12C12.7956 18 13.5587 17.6839 14.1213 17.1213C14.6839 16.5587 15 15.7956 15 15V5M15 5L11 9M15 5L19 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77752">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
