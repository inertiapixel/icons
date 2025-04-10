import React from "react";

export const BucketOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80899)">
<path d="M5.029 5.036C4.374 5.616 4 6.286 4 7C4 9.033 7.033 10.712 10.96 10.967M14.748 10.757C17.812 10.198 20 8.728 20 7C20 4.79 16.418 3 12 3C10.395 3 8.9 3.236 7.648 3.643" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7C4 7.664 4.088 8.324 4.263 8.965L7 19C7.5 20.5 9.239 21 12 21C14.761 21 16.5 20.5 17 19C17.1 18.7 17.252 18.188 17.457 17.465M18.319 14.319C18.581 13.344 19.054 11.559 19.737 8.965C19.9118 8.32464 20.0003 7.66379 20 7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80899">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
