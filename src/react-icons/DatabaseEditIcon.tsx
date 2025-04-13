import React from "react";

export const DatabaseEditIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77012)">
<path d="M4 6C4 7.657 7.582 9 12 9C16.418 9 20 7.657 20 6C20 4.343 16.418 3 12 3C7.582 3 4 4.343 4 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V12C4 13.657 7.582 15 12 15C12.478 15 12.947 14.984 13.402 14.954"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12V18C4 19.526 7.04 20.786 10.972 20.975"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.42 15.6112C18.615 15.4162 18.8465 15.2615 19.1013 15.156C19.3561 15.0504 19.6292 14.9961 19.905 14.9961C20.1808 14.9961 20.4539 15.0504 20.7087 15.156C20.9635 15.2615 21.195 15.4162 21.39 15.6112C21.585 15.8062 21.7397 16.0377 21.8452 16.2925C21.9508 16.5473 22.0051 16.8204 22.0051 17.0962C22.0051 17.372 21.9508 17.6451 21.8452 17.8999C21.7397 18.1547 21.585 18.3862 21.39 18.5812L18 22.0012H15V19.0012L18.42 15.6112Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77012">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
