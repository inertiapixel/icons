import React from "react";

export const BuildingCastleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80828)">
<path d="M15 19V17C15 16.2044 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14C11.2044 14 10.4413 14.3161 9.87868 14.8787C9.31607 15.4413 9 16.2044 9 17V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V5H7V8H10V5H14V8H17V5H21V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H16C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80828">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
