import React from "react";

export const VariablePlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60471)">
<path d="M5 4C2.5 9 2.5 14 5 20M19 4C20.38 6.76 21 9.52 20.855 12.448M9 9H10C11 9 11 10 12.016 12.527C12.801 14.499 12.96 15.535 13.499 15.873" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16C9.5 16 11 14 12 12.5C13 11 14.5 9 16 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60471">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
