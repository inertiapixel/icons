import React from "react";

export const TrackIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61227)">
<path d="M4 15L15 4M20 9L9 20M5 12L12 19M8.5 8.5L15.5 15.5M12 5L19 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61227">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
