import React from "react";

export const BucketIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80895)">
<path d="M4 7C4 8.06087 4.84285 9.07828 6.34315 9.82843C7.84344 10.5786 9.87827 11 12 11C14.1217 11 16.1566 10.5786 17.6569 9.82843C19.1571 9.07828 20 8.06087 20 7C20 5.93913 19.1571 4.92172 17.6569 4.17157C16.1566 3.42143 14.1217 3 12 3C9.87827 3 7.84344 3.42143 6.34315 4.17157C4.84285 4.92172 4 5.93913 4 7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7C4 7.664 4.088 8.324 4.263 8.965L7 19C7.5 20.5 9.239 21 12 21C14.761 21 16.5 20.5 17 19C17.333 18 18.246 14.655 19.737 8.965C19.9118 8.32464 20.0003 7.66379 20 7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80895">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
