import React from "react";

export const TextOrientationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_61813)">
<path d="M9.00181 15.0018L4.00181 10.0018C2.63481 8.63481 2.63481 6.36881 4.00181 5.00181C5.36881 3.63481 7.63481 3.63481 9.00181 5.00181L14.0018 10.0018" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 11.5L10.5 6.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12L12 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12V16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61813">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
