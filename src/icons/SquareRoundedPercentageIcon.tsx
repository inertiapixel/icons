import React from "react";

export const SquareRoundedPercentageIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62599)">
<path d="M12 3C19.2 3 21 4.8 21 12C21 19.2 19.2 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15.0742L15 9.07422" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9.10547V9.12047" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15.1211V15.1361" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62599">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
