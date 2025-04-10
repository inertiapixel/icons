import React from "react";

export const BrandTelegramIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81384)">
<path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81384">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
