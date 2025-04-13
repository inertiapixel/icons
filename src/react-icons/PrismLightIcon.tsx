import React from "react";

export const PrismLightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65788)">
<path d="M4.72944 19H16.2684C16.444 19 16.6164 18.9537 16.7684 18.866C16.9205 18.7782 17.0467 18.652 17.1344 18.4999C17.2222 18.3479 17.2684 18.1755 17.2684 18C17.2684 17.8244 17.2222 17.652 17.1344 17.5L11.3654 7.49996C11.2777 7.34795 11.1514 7.22172 10.9994 7.13396C10.8474 7.0462 10.675 7 10.4994 7C10.3239 7 10.1515 7.0462 9.99947 7.13396C9.84745 7.22172 9.72122 7.34795 9.63344 7.49996L3.86444 17.5C3.77672 17.6519 3.73051 17.8243 3.73047 17.9997C3.73042 18.1752 3.77654 18.3475 3.86419 18.4995C3.95183 18.6515 4.07793 18.7778 4.2298 18.8656C4.38168 18.9534 4.55399 18.9998 4.72944 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13H6.45"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5L13.5 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 9L14.25 12.25"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 15L15 13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65788">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
