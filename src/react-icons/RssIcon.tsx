import React from "react";

export const RssIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64776)">
<path d="M4 19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20C5.26522 20 5.51957 19.8946 5.70711 19.7071C5.89464 19.5196 6 19.2652 6 19C6 18.7348 5.89464 18.4804 5.70711 18.2929C5.51957 18.1054 5.26522 18 5 18C4.73478 18 4.48043 18.1054 4.29289 18.2929C4.10536 18.4804 4 18.7348 4 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64776">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
