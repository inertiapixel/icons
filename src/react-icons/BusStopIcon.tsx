import React from "react";

export const BusStopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80631)">
<path d="M3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H6C6.26522 3 6.51957 3.10536 6.70711 3.29289C6.89464 3.48043 7 3.73478 7 4V8C7 8.26522 6.89464 8.51957 6.70711 8.70711C6.51957 8.89464 6.26522 9 6 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8V4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 17C16 17.5304 16.2107 18.0391 16.5858 18.4142C16.9609 18.7893 17.4696 19 18 19C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17C20 16.4696 19.7893 15.9609 19.4142 15.5858C19.0391 15.2107 18.5304 15 18 15C17.4696 15 16.9609 15.2107 16.5858 15.5858C16.2107 15.9609 16 16.4696 16 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5H17C19.761 5 22 8.134 22 12V17H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 17H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5L17.5 12H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 10H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80631">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
