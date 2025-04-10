import React from "react";

export const HorseToyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_71607)">
<path d="M3.5 17.5C9.167 22.167 14.833 22.167 20.5 17.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.5L17 10L18 8L20 9L21.5 7.5L19 3C13.948 3.218 13.01 6.133 12 9H6C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18.5L7 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 20L10 15H14L16 20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71607">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
