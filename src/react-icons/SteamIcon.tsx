import React from "react";

export const SteamIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62445)">
<path d="M11 4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13C4.26522 13 4.51957 12.8946 4.70711 12.7071C4.89464 12.5196 5 12.2652 5 12C5 11.7348 4.89464 11.4804 4.70711 11.2929C4.51957 11.1054 4.26522 11 4 11C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12C19 12.2652 19.1054 12.5196 19.2929 12.7071C19.4804 12.8946 19.7348 13 20 13C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 20C11 20.2652 11.1054 20.5196 11.2929 20.7071C11.4804 20.8946 11.7348 21 12 21C12.2652 21 12.5196 20.8946 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20C13 19.7348 12.8946 19.4804 12.7071 19.2929C12.5196 19.1054 12.2652 19 12 19C11.7348 19 11.4804 19.1054 11.2929 19.2929C11.1054 19.4804 11 19.7348 11 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 5.5L8.5 8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 15.5L18.5 18.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 5.5L15.5 8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 15.5L5.5 18.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62445">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
