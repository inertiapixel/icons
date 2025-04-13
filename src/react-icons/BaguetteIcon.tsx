import React from "react";

export const BaguetteIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84440)">
<path d="M5.62846 11.2832L11.2725 5.64619C13.9375 2.98319 17.1965 1.89919 19.9355 4.44119L20.1235 4.62219C20.4014 4.89963 20.6219 5.22915 20.7723 5.59189C20.9228 5.95463 21.0002 6.34348 21.0002 6.73619C21.0002 7.12889 20.9228 7.51774 20.7723 7.88049C20.6219 8.24323 20.4014 8.57275 20.1235 8.85019L8.83646 20.1242C8.29848 20.6599 7.57737 20.9718 6.81854 20.9968C6.05971 21.0219 5.31961 20.7583 4.74746 20.2592L4.60446 20.1242C1.87646 17.4002 2.90046 14.0072 5.62846 11.2832Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 7.5L11 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 10.5L8 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 4.5L14 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84440">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
