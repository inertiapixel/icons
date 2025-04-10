import React from "react";

export const ArrowsShuffleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_84829)">
<path d="M18 4L21 7L18 10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 20L21 17L18 14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7H6C7.32608 7 8.59785 7.52678 9.53553 8.46447C10.4732 9.40215 11 10.6739 11 12C11 13.3261 11.5268 14.5979 12.4645 15.5355C13.4021 16.4732 14.6739 17 16 17H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 7.00001H16C14.9179 6.99841 13.8647 7.34946 13 8.00001M9 16C8.13506 16.6502 7.08204 17.0012 6 17H3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84829">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
