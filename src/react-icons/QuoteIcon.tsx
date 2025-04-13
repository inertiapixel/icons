import React from "react";

export const QuoteIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65598)">
<path d="M10 11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H9C9.26522 6 9.51957 6.10536 9.70711 6.29289C9.89464 6.48043 10 6.73478 10 7V13C10 15.667 8.667 17.333 6 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 11H15C14.7348 11 14.4804 10.8946 14.2929 10.7071C14.1054 10.5196 14 10.2652 14 10V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7V13C19 15.667 17.667 17.333 15 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65598">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
