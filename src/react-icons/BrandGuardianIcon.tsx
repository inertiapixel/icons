import React from "react";

export const BrandGuardianIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82131)">
<path d="M14 13H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12.0011C4 2.70506 13.5 3.00106 13.5 3.00106C10.692 3.00106 9 7.37406 9 12.0011C9 16.6281 10.763 20.9771 13.572 20.9771C13.572 21.0001 4 22.0691 4 12.0011Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 3C15.916 3 18.353 4.16 19 5V8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 13V21C15 21 17.77 20.63 19 19V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 21H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 3H14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82131">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
