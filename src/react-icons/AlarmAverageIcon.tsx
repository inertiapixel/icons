import React from "react";

export const AlarmAverageIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86146)">
<path d="M5 13C5 13.9193 5.18106 14.8295 5.53284 15.6788C5.88463 16.5281 6.40024 17.2997 7.05025 17.9497C7.70026 18.5998 8.47194 19.1154 9.32122 19.4672C10.1705 19.8189 11.0807 20 12 20C12.9193 20 13.8295 19.8189 14.6788 19.4672C15.5281 19.1154 16.2997 18.5998 16.9497 17.9497C17.5998 17.2997 18.1154 16.5281 18.4672 15.6788C18.8189 14.8295 19 13.9193 19 13C19 11.1435 18.2625 9.36301 16.9497 8.05025C15.637 6.7375 13.8565 6 12 6C10.1435 6 8.36301 6.7375 7.05025 8.05025C5.7375 9.36301 5 11.1435 5 13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 4L4.25 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4L19.75 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H9L11 16L13 10L15 13H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86146">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
