import React from "react";

export const MassageIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69226)">
<path d="M3 17C3 17.2652 3.10536 17.5196 3.29289 17.7071C3.48043 17.8946 3.73478 18 4 18C4.26522 18 4.51957 17.8946 4.70711 17.7071C4.89464 17.5196 5 17.2652 5 17C5 16.7348 4.89464 16.4804 4.70711 16.2929C4.51957 16.1054 4.26522 16 4 16C3.73478 16 3.48043 16.1054 3.29289 16.2929C3.10536 16.4804 3 16.7348 3 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 5C8 5.26522 8.10536 5.51957 8.29289 5.70711C8.48043 5.89464 8.73478 6 9 6C9.26522 6 9.51957 5.89464 9.70711 5.70711C9.89464 5.51957 10 5.26522 10 5C10 4.73478 9.89464 4.48043 9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 22L8 20V17H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14L11 12L12 8C15 9 15 12 15 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69226">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
