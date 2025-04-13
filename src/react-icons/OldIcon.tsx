import React from "react";

export const OldIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67241)">
<path d="M11 21L10 17L8 14V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 14L4 11L8 8L11 10L14 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 4C7 4.26522 7.10536 4.51957 7.29289 4.70711C7.48043 4.89464 7.73478 5 8 5C8.26522 5 8.51957 4.89464 8.70711 4.70711C8.89464 4.51957 9 4.26522 9 4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17L5 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21V12.5C16 12.1022 16.158 11.7206 16.4393 11.4393C16.7206 11.158 17.1022 11 17.5 11C17.8978 11 18.2794 11.158 18.5607 11.4393C18.842 11.7206 19 12.1022 19 12.5V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67241">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
