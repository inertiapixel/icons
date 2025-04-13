import React from "react";

export const CurrencyLydIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77255)">
<path d="M11 15H11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 5V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H16.236C15.8645 17 15.5004 16.8965 15.1844 16.7012C14.8684 16.5058 14.6131 16.2263 14.447 15.894L14 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 8L7.773 12.687C8.2 13.384 8.007 14.313 7.343 14.762C7.11489 14.9168 6.84565 14.9997 6.57 15H4.346C4.21981 14.9994 4.09507 14.9731 3.97937 14.9227C3.86367 14.8723 3.75943 14.7989 3.673 14.707L3 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77255">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
