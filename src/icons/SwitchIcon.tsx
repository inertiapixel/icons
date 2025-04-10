import React from "react";

export const SwitchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62180)">
<path d="M15 4H19V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.75 9.25L19 4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 19L9 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19H19V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5L19 19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62180">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
