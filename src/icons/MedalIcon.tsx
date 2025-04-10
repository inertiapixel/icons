import React from "react";

export const MedalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68999)">
<path d="M12 4V7M8 4V10M16 4V10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18.5L9 20L9.5 16.5L7.5 14.5L10.5 14L12 11L13.5 14L16.5 14.5L14.5 16.5L15 20L12 18.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68999">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
