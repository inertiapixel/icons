import React from "react";

export const SquareRoundedPlus2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62594)">
<path d="M12.54 20.996C12.364 21 12.184 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3C19.2 3 21 4.8 21 12C21 12.185 20.999 12.366 20.996 12.544"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62594">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
