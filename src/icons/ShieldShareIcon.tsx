import React from "react";

export const ShieldShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_63977)">
<path d="M11.9989 21C10.4421 20.5962 8.98234 19.8836 7.7064 18.9045C6.43047 17.9254 5.36437 16.6998 4.57145 15.3005C3.77854 13.9013 3.27499 12.3569 3.09073 10.7592C2.90647 9.16147 3.04527 7.54302 3.49886 6C6.61439 6.14257 9.66303 5.06658 11.9989 3C14.3347 5.06658 17.3833 6.14257 20.4989 6C21.0748 7.9592 21.1412 10.033 20.6919 12.025" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63977">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
