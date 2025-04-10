import React from "react";

export const BrandVscodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81221)">
<path d="M16 3V21L20 18.5V5.5L16 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.165 13.903L5 17.5L3 16.5L7.333 12M9.068 10.198L16 3V8L11.205 12.141" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16.5L5 6.5L3 7.5L16 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81221">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
