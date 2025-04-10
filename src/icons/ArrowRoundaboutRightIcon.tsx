import React from "react";

export const ArrowRoundaboutRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_85111)">
<path d="M21 9H13C13 8.0111 12.7068 7.0444 12.1573 6.22215C11.6079 5.39991 10.827 4.75904 9.91342 4.3806C8.99979 4.00217 7.99446 3.90315 7.02455 4.09608C6.05465 4.289 5.16373 4.76521 4.46447 5.46447C3.76521 6.16373 3.289 7.05465 3.09608 8.02455C2.90315 8.99446 3.00217 9.99979 3.3806 10.9134C3.75904 11.827 4.39991 12.6079 5.22215 13.1573C6.0444 13.7068 7.0111 14 8 14V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 5L21 9L17 13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85111">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
