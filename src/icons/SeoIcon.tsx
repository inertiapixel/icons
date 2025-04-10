import React from "react";

export const SeoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64350)">
<path d="M7 8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9V11C3 11.2652 3.10536 11.5196 3.29289 11.7071C3.48043 11.8946 3.73478 12 4 12H6C6.26522 12 6.51957 12.1054 6.70711 12.2929C6.89464 12.4804 7 12.7348 7 13V15C7 15.2652 6.89464 15.5196 6.70711 15.7071C6.51957 15.8946 6.26522 16 6 16H3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 16H10V8H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9C17 8.73478 17.1054 8.48043 17.2929 8.29289C17.4804 8.10536 17.7348 8 18 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16H18C17.7348 16 17.4804 15.8946 17.2929 15.7071C17.1054 15.5196 17 15.2652 17 15V9Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64350">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
