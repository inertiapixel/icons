import React from "react";

export const MathMinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_69146)">
<path d="M15 18C15 18.5304 15.2107 19.0391 15.5858 19.4142C15.9609 19.7893 16.4696 20 17 20C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18C19 17.4696 18.7893 16.9609 18.4142 16.5858C18.0391 16.2107 17.5304 16 17 16C16.4696 16 15.9609 16.2107 15.5858 16.5858C15.2107 16.9609 15 17.4696 15 18Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13C3 13 4 4 7 4C9.48 4 12.643 13.565 15.36 16.883" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7461 17.038C19.4481 16.158 20.1981 13.478 20.9981 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69146">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
