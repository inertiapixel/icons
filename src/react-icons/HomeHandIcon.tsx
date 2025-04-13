import React from "react";

export const HomeHandIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71718)">
<path d="M18 9L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9995 17.5L15.4145 16.922C15.138 16.6793 14.7825 16.5454 14.4145 16.5454C14.0466 16.5454 13.6911 16.6793 13.4145 16.922C12.9375 17.355 12.8635 18.034 13.2375 18.544L14.9995 21C15.3695 21.506 16.3305 22 16.9995 22H19.9995C21.0085 22 21.4965 21.317 21.6215 20.407C21.8735 19.469 21.9995 18.667 21.9995 18C21.9995 17 21.0605 16.157 19.9995 16H18.9995V13.364C18.9995 12.61 18.3275 12 17.4995 12C16.6715 12 15.9995 12.61 15.9995 13.364V17.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71718">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
