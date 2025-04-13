import React from "react";

export const ClockDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78570)">
<path d="M20.9841 12.535C21.0927 10.7118 20.644 8.89873 19.6976 7.33662C18.7512 5.7745 17.352 4.53729 15.6857 3.78932C14.0195 3.04135 12.1651 2.81804 10.369 3.14904C8.57277 3.48004 6.91981 4.34968 5.62964 5.64246C4.33947 6.93523 3.47315 8.58994 3.14577 10.3868C2.81839 12.1836 3.04544 14.0375 3.79676 15.7023C4.54808 17.367 5.78811 18.7637 7.35213 19.707C8.91615 20.6502 10.7301 21.0952 12.5531 20.983"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 22L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78570">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
