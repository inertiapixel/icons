import React from "react";

export const BoldOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83622)">
<path d="M9 5H13C13.7213 5.00005 14.425 5.22295 15.0147 5.63821C15.6045 6.05347 16.0516 6.6408 16.2948 7.31986C16.538 7.99892 16.5655 8.73654 16.3734 9.4318C16.1814 10.1271 15.7793 10.746 15.222 11.204M12 12H7V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.107 17.112C16.8117 17.6811 16.3658 18.1581 15.8179 18.4911C15.27 18.824 14.6411 19.0001 14 19H7V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83622">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
