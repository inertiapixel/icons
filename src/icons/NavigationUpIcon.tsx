import React from "react";

export const NavigationUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67601)">
<path d="M16.5405 12.843L12.0005 3L4.03046 20.275C3.96046 20.475 4.01346 20.699 4.16546 20.847C4.31546 20.995 4.53946 21.04 4.73546 20.963L12.0005 18.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 16L16 19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67601">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
