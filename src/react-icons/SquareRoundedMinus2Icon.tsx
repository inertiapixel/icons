import React from "react";

export const SquareRoundedMinus2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62650)">
<path d="M12.5 21C12.32 21.002 12.186 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3C19.2 3 21 4.8 21 12C21 13.136 20.954 14.138 20.848 15.02"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62650">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
