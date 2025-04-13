import React from "react";

export const FlagOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73526)">
<path d="M5 5V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 5V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.64062 3.64465C8.42259 3.50828 9.22579 3.56006 9.98378 3.79568C10.7418 4.0313 11.4328 4.444 11.9996 4.99965C12.9343 5.91578 14.1909 6.42893 15.4996 6.42893C16.8084 6.42893 18.065 5.91578 18.9996 4.99965"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13.9996C5.93464 13.0835 7.19124 12.5703 8.5 12.5703C9.80876 12.5703 11.0654 13.0835 12 13.9996C12.9181 14.9019 14.1498 15.414 15.437 15.4286M18.456 14.4626C18.646 14.3226 18.827 14.1686 19 13.9996"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73526">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
