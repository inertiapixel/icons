import React from "react";

export const SvgIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62240)">
<path d="M21 8H19C18.4696 8 17.9609 8.21071 17.5858 8.58579C17.2107 8.96086 17 9.46957 17 10V14C17 14.5304 17.2107 15.0391 17.5858 15.4142C17.9609 15.7893 18.4696 16 19 16H21V12H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9V11C3 11.2652 3.10536 11.5196 3.29289 11.7071C3.48043 11.8946 3.73478 12 4 12H6C6.26522 12 6.51957 12.1054 6.70711 12.2929C6.89464 12.4804 7 12.7348 7 13V15C7 15.2652 6.89464 15.5196 6.70711 15.7071C6.51957 15.8946 6.26522 16 6 16H3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8L11.5 16H12.5L14 8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62240">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
