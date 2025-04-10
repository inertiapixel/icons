import React from "react";

export const ShieldBoltIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64076)">
<path d="M13.3409 20.566C12.9049 20.736 12.4569 20.881 11.9989 21C10.4421 20.5962 8.98234 19.8836 7.7064 18.9045C6.43047 17.9254 5.36437 16.6998 4.57145 15.3005C3.77854 13.9013 3.27499 12.3569 3.09073 10.7592C2.90647 9.16147 3.04527 7.54302 3.49886 6C6.61439 6.14257 9.66303 5.06658 11.9989 3C14.3347 5.06658 17.3833 6.14257 20.4989 6C21.1056 8.06461 21.146 10.2544 20.6159 12.34" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L17 19H21L19 22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64076">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
