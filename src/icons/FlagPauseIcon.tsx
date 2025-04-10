import React from "react";

export const FlagPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_73520)">
<path d="M13.536 15.0286C12.9643 14.7843 12.4434 14.4353 12 13.9996C11.0654 13.0835 9.80876 12.5703 8.5 12.5703C7.19124 12.5703 5.93464 13.0835 5 13.9996V4.9996C5.93464 4.08346 7.19124 3.57031 8.5 3.57031C9.80876 3.57031 11.0654 4.08346 12 4.9996C12.9346 5.91573 14.1912 6.42888 15.5 6.42888C16.8088 6.42888 18.0654 5.91573 19 4.9996V13.4996" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73520">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
