import React from "react";

export const BrandToyotaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81341)">
<path d="M2 12C2 13.8565 3.05357 15.637 4.92893 16.9497C6.8043 18.2625 9.34784 19 12 19C14.6522 19 17.1957 18.2625 19.0711 16.9497C20.9464 15.637 22 13.8565 22 12C22 10.1435 20.9464 8.36301 19.0711 7.05025C17.1957 5.7375 14.6522 5 12 5C9.34784 5 6.8043 5.7375 4.92893 7.05025C3.05357 8.36301 2 10.1435 2 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12C9 15.866 10.343 19 12 19C13.657 19 15 15.866 15 12C15 8.134 13.657 5 12 5C10.343 5 9 8.134 9 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.415 6.19141C5.527 6.69441 5 7.32141 5 8.00041C5 9.65741 8.134 11.0004 12 11.0004C15.866 11.0004 19 9.65741 19 8.00041C19 7.32241 18.475 6.69641 17.59 6.19441"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81341">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
