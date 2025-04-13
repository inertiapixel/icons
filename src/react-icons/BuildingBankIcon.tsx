import React from "react";

export const BuildingBankIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80858)">
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 6L12 3L19 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 10V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 14V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80858">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
