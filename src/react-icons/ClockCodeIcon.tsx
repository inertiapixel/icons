import React from "react";

export const ClockCodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78593)">
<path d="M20.9312 13.1109C21.154 11.3194 20.8329 9.5024 20.0097 7.8958C19.1865 6.28921 17.8991 4.9673 16.3149 4.10181C14.7307 3.23632 12.9228 2.86725 11.1261 3.04254C9.32939 3.21783 7.62692 3.92938 6.23985 5.08476C4.85278 6.24013 3.84522 7.78594 3.34805 9.52136C2.85088 11.2568 2.88708 13.1016 3.45195 14.8162C4.01682 16.5308 5.08426 18.0358 6.51559 19.1359C7.94692 20.236 9.67599 20.8802 11.4782 20.9849"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21L22 19L20 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17L15 19L17 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78593">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
