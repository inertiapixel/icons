import React from "react";

export const BuildingCommunityIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80806)">
<path d="M13 21V14L8 9L3 14V21H8M13 21H8M13 21H21V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V10M8 21V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 7V7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7V7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 15V15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80806">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
