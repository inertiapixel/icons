import React from "react";

export const NavigationBoltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67714)">
<path d="M16.5595 12.882L12.0005 3L4.03046 20.275C3.96046 20.475 4.01346 20.699 4.16546 20.847C4.31546 20.995 4.53946 21.04 4.73546 20.963L12.0005 18.5L13.0365 18.851" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L17 19H21L19 22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67714">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
