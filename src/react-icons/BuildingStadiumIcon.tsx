import React from "react";

export const BuildingStadiumIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80719)">
<path d="M4 12C4 12.5304 4.84285 13.0391 6.34315 13.4142C7.84344 13.7893 9.87827 14 12 14C14.1217 14 16.1566 13.7893 17.6569 13.4142C19.1571 13.0391 20 12.5304 20 12C20 11.4696 19.1571 10.9609 17.6569 10.5858C16.1566 10.2107 14.1217 10 12 10C9.87827 10 7.84344 10.2107 6.34315 10.5858C4.84285 10.9609 4 11.4696 4 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V19C4 19.94 6.51 20.785 10 21V18H14V21C17.435 20.775 20 19.93 20 19V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6H19V3H15V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6H11V3H7V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80719">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
