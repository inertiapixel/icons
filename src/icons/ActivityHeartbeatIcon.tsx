import React from "react";

export const ActivityHeartbeatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_86530)">
<path d="M3 12H7.5L9 6L13 18L15 9L16.5 12H21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86530">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
