import React from "react";

export const CarouselHorizontal1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79963)">
<path d="M7 6C7 5.73478 7.10536 5.48043 7.29289 5.29289C7.48043 5.10536 7.73478 5 8 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H8C7.73478 19 7.48043 18.8946 7.29289 18.7071C7.10536 18.5196 7 18.2652 7 18V6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 17H21C20.7348 17 20.4804 16.8946 20.2929 16.7071C20.1054 16.5196 20 16.2652 20 16V8C20 7.73478 20.1054 7.48043 20.2929 7.29289C20.4804 7.10536 20.7348 7 21 7H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 17H3C3.26522 17 3.51957 16.8946 3.70711 16.7071C3.89464 16.5196 4 16.2652 4 16V8C4 7.73478 3.89464 7.48043 3.70711 7.29289C3.51957 7.10536 3.26522 7 3 7H2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79963">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
