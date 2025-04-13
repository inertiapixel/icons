import React from "react";

export const CurrencyKipIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77300)">
<path d="M6 12H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 17.1435 15.2625 15.363 13.9497 14.0503C12.637 12.7375 10.8565 12 9 12C10.8565 12 12.637 11.2625 13.9497 9.94975C15.2625 8.63699 16 6.85652 16 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77300">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
