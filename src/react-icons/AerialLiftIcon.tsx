import React from "react";

export const AerialLiftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86183)">
<path d="M4 5L20 3M12 4V14M5 14H19M6.894 8H17.2C19.65 11 19.65 17 17 20H6.894C4.35 17 4.35 11 6.894 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86183">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
