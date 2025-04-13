import React from "react";

export const Loader3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70266)">
<path d="M3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12C17 11.0111 16.7068 10.0444 16.1574 9.22215C15.6079 8.39991 14.827 7.75904 13.9134 7.3806C12.9998 7.00217 11.9945 6.90315 11.0246 7.09608C10.0546 7.289 9.16373 7.76521 8.46447 8.46447C7.76521 9.16373 7.289 10.0546 7.09608 11.0246C6.90315 11.9945 7.00217 12.9998 7.3806 13.9134C7.75904 14.827 8.39991 15.6079 9.22215 16.1574C10.0444 16.7068 11.0111 17 12 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70266">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
