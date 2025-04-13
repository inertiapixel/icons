import React from "react";

export const SprayIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63204)">
<path d="M4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H10C10.5304 10 11.0391 10.2107 11.4142 10.5858C11.7893 10.9609 12 11.4696 12 12V19C12 19.5304 11.7893 20.0391 11.4142 20.4142C11.0391 20.7893 10.5304 21 10 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5H9C9.26522 5 9.51957 5.10536 9.70711 5.29289C9.89464 5.48043 10 5.73478 10 6V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 7H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9H18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5H18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3H21.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 7H21.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 11H21.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 7H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63204">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
